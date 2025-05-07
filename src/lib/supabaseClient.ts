import { createClient } from '@supabase/supabase-js';

// Ortam değişkenlerinden Supabase URL ve Anon Key'i al
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabase URL veya Anon Key eksikse hata fırlat
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file.');
}

// Supabase istemcisini oluştur ve dışa aktar
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
