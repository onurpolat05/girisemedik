import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#320604] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#d9d9d9] mb-6 leading-tight">
            Başarısızlık Hikayeleri: Gerçek Girişimcilik Yolculukları
          </h1>
          <p className="text-lg md:text-xl text-[#d9d9d9] opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Girişimcilik yolunda yaşanan başarısızlıklar, en değerli öğrenme fırsatlarıdır. 
            Girişemedik platformu, gerçek girişimcilerin başarısızlık hikayelerini paylaşarak, 
            bu değerli dersleri toplulukla buluşturuyor. Yolculuğunuzda yalnız değilsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#videos" 
              className="bg-[#d9d9d9] text-[#320604] px-6 py-3 rounded-md font-medium hover:bg-white transition-colors duration-300"
            >
              Hikayeleri İzle
            </a>
            <a 
              href="#submit" 
              className="border-2 border-[#d9d9d9] text-[#d9d9d9] px-6 py-3 rounded-md font-medium hover:bg-[#d9d9d9] hover:text-[#320604] transition-colors duration-300"
            >
              Hikayeni Paylaş
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#4A1A17] rounded-full opacity-20"></div>
      <div className="absolute top-24 -right-8 w-24 h-24 bg-[#4A1A17] rounded-full opacity-20"></div>
    </section>
  );
};

export default Hero;