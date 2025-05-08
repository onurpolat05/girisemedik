// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

interface SubmissionData {
  name?: string;
  title: string;
  content: string;
  industry: string;
  year: string;
  learnings: string;
  recaptchaToken: string;
}

serve(async (req) => {
  // CORS headers - adjust origin as needed for your deployed frontend
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'http://girisemedik.com', // For local dev; in prod, use your actual frontend URL todo 'https://onurpolat05.github.io',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { recaptchaToken, ...formData } = await req.json() as SubmissionData;

    if (!recaptchaToken) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA token is missing.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }

    const secretKey = Deno.env.get('RECAPTCHA_V2_SECRET_KEY');
    if (!secretKey) {
      console.error('RECAPTCHA_V2_SECRET_KEY is not set in Edge Function environment variables.');
      return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    // Verify reCAPTCHA token with Google
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
      return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed.', details: recaptchaData['error-codes'] }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }

    // reCAPTCHA verified, proceed to insert data into Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const { data, error: supabaseError } = await supabaseClient
      .from('submissions')
      .insert([
        {
          name: formData.name || null,
          title: formData.title,
          story_content: formData.content,
          industry: formData.industry,
          year_of_venture: formData.year,
          learnings: formData.learnings,
        },
      ])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      throw supabaseError;
    }

    return new Response(JSON.stringify({ message: 'Submission successful!', data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (err) {
    console.error('Error in Edge Function:', err);
    return new Response(JSON.stringify({ error: err.message || 'An unexpected error occurred.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/verify-recaptcha-and-submit' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions","title":"Test","content":"Test content","industry":"Test industry","year":"2022","learnings":"Test learnings","recaptchaToken":"your-recaptcha-token"}'

*/
