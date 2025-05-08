import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import ReCAPTCHA from 'react-google-recaptcha';

const SubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    content: '',
    industry: '',
    year: '',
    learnings: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setError('Lütfen reCAPTCHA doğrulamasını tamamlayın.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      const { data: functionResponse, error: functionError } = await supabase.functions.invoke(
        'verify-recaptcha-and-submit',
        {
          body: { ...formData, recaptchaToken },
        }
      );

      if (functionError) {
        throw new Error(functionError.message || 'Edge Function çağrılırken bir hata oluştu.');
      }

      if (functionResponse.error) {
        throw new Error(functionResponse.error.details || functionResponse.error || 'Gönderim sırasında bir hata oluştu.');
      }

      console.log('Submission successful via Edge Function:', functionResponse);
      setIsSuccess(true);
      setFormData({
        name: '',
        title: '',
        content: '',
        industry: '',
        year: '',
        learnings: ''
      });
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(`Gönderim sırasında bir hata oluştu: ${err.message || 'Lütfen tekrar deneyin.'}`);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Teknoloji',
    'E-ticaret',
    'Fintech',
    'Sağlık',
    'Eğitim',
    'Yeme-İçme',
    'Hizmet',
    'Üretim',
    'Diğer'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <section id="submit" className="py-20 bg-[#320604]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-[#421108] rounded-lg p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#d9d9d9] mb-4">Hikayeni Paylaş</h2>
            <p className="text-[#d9d9d9] opacity-80">
              Girişimcilik yolculuğunda yaşadığın başarısızlık hikayeni bizimle paylaş. 
              Deneyimlerin diğer girişimcilere ilham olsun.
            </p>
          </div>

          {isSuccess && (
            <div className="bg-green-700 text-white p-4 rounded-md mb-6 text-center">
              Hikayeniz başarıyla gönderildi! Ekibimiz inceledikten sonra sizinle iletişime geçecek.
            </div>
          )}

          {error && (
            <div className="bg-red-700 text-white p-4 rounded-md mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#d9d9d9] mb-2">İsim (Opsiyonel)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#2A0503] text-[#d9d9d9] border border-[#4A1A17] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
                placeholder="İsminiz"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-[#d9d9d9] mb-2">Hikaye Başlığı *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-[#2A0503] text-[#d9d9d9] border border-[#4A1A17] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
                placeholder="Başarısızlık hikayenize bir başlık verin"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-[#d9d9d9] mb-2">Hikaye İçeriği *</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-[#2A0503] text-[#d9d9d9] border border-[#4A1A17] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
                placeholder="Hikayenizi detaylı bir şekilde anlatın..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-[#d9d9d9] mb-2">Sektör *</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#2A0503] text-[#d9d9d9] border border-[#4A1A17] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
                >
                  <option value="">Sektör Seçin</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="year" className="block text-[#d9d9d9] mb-2">Yıl *</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#2A0503] text-[#d9d9d9] border border-[#4A1A17] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
                >
                  <option value="">Yıl Seçin</option>
                  {years.map(year => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="learnings" className="block text-[#d9d9d9] mb-2">Alınan Dersler *</label>
              <textarea
                id="learnings"
                name="learnings"
                value={formData.learnings}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-[#2A0503] text-[#d9d9d9] border border-[#4A1A17] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9d9d9]"
                placeholder="Bu deneyimden öğrendiğiniz en önemli dersler nelerdir?"
              ></textarea>
            </div>

            <div className="my-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA_V2_SITE_KEY || 'YOUR_SITE_KEY_NOT_FOUND'}
                onChange={onRecaptchaChange}
                theme="dark" // You can choose 'light' or 'dark'
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d9d9d9] text-[#2A0503] font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Hikayemi Gönder'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;