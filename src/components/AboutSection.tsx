import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#360805]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#d9d9d9] mb-4">Hakkımızda</h2>
            <div className="w-20 h-1 bg-[#d9d9d9] opacity-50 mx-auto"></div>
          </div>
          
          <div className="md:flex md:space-x-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#4A1A17] flex items-center justify-center">
                  <svg className="w-40 h-40 text-[#d9d9d9] opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.34 9.34003V11.35C4.34 15.57 7.78 19 12 19C16.22 19 19.66 15.57 19.66 11.35V9.34003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.34 11.34H13.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#2A0503] rounded-lg -z-10"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <p className="text-[#d9d9d9] opacity-90 mb-6 leading-relaxed">
                Girişimcilik sadece başarı öyküsü mü? Ya defalarca deneyip başlayıp ama sonuca ulaşamayanlar? 
                Burası onların kanalı: Girişemedik!
              </p>
              <p className="text-[#d9d9d9] opacity-90 mb-6 leading-relaxed">
                Fikir bulunca hemen 'girişenlerdeniz'. Karavandan yapay zekaya uzanan yolda pek çok alanda denedik! 
                Ama dürüst olalım: Önceki girişimlerimizin çoğu battı, hayallere ulaşamadı ya da bizi sert bir 'pivot' 
                yapmaya zorladı. 🤷‍♂️ (Şimdiki AI macerası ise sürüyor!)
              </p>
              <p className="text-[#d9d9d9] opacity-90 leading-relaxed">
                Bu kanalda girişimciliğin parlak vitrinini değil, gerçeğini konuşuyoruz: Başarısızlıkları, 
                U dönüşlerini, F5 paniğini. Amacımız ajitasyon değil, bu gerçek yolculuğu tüm samimiyetimiz 
                ve mizahımızla paylaşmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;