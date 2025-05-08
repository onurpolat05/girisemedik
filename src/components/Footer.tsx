import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A0503] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <a href="/girisemedik" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mr-3">
              <img src={process.env.PUBLIC_URL + '/favicon.svg'} alt="Girişemedik Logo" className="w-60 h-60" />
              </div>
              <h2 className="text-[#d9d9d9] text-xl font-bold">GİRİŞEMEDİK</h2>
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.youtube.com/@Girisemedik" target="_blank" rel="noopener noreferrer" className="text-[#d9d9d9] hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/girisemedik?igsh=MTF1NGZwcXVnMzcybQ==" target="_blank" rel="noopener noreferrer" className="text-[#d9d9d9] hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#4A1A17] pt-8">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-[#d9d9d9] font-bold text-lg mb-4">Hakkımızda</h3>
              <p className="text-[#d9d9d9] opacity-80">
                Girişimcilik sadece başarı öyküsü değil! Burası defalarca deneyip başlayıp ama sonuca ulaşamayanların kanalı: Girişemedik! 
                Başarısızlığa somurtmak yerine gülmeyi tercih ediyoruz.
              </p>
            </div>
            
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-[#d9d9d9] font-bold text-lg mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><a href="#videos" className="text-[#d9d9d9] opacity-80 hover:opacity-100 transition-opacity duration-200">Son Hikayeler</a></li>
                <li><a href="#submit" className="text-[#d9d9d9] opacity-80 hover:opacity-100 transition-opacity duration-200">Hikayeni Paylaş</a></li>
                <li><a href="#about" className="text-[#d9d9d9] opacity-80 hover:opacity-100 transition-opacity duration-200">Hakkımızda</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#d9d9d9] opacity-70 text-sm">
            &copy; {new Date().getFullYear()} Girişemedik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;