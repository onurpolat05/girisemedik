import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#320604] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center mr-3">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#320604]">
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 19.25A8.25 8.25 0 103.75 12 8.25 8.25 0 0012 20.25zm3.97-5.5H8.03a.75.75 0 00-.53 1.28l3.97 3.97a.75.75 0 001.06 0l3.97-3.97a.75.75 0 00-.53-1.28zm-7.94-5h7.94a.75.75 0 00.53-1.28L12.53 4.5a.75.75 0 00-1.06 0L7.5 8.47a.75.75 0 00.53 1.28z" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="text-[#d9d9d9] text-xl md:text-2xl font-bold">GİRİŞEMEDİK</h1>
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#videos" className="text-[#d9d9d9] hover:text-white transition-colors duration-200">
            Son Hikayeler
          </a>
          <a href="#submit" className="text-[#d9d9d9] hover:text-white transition-colors duration-200">
            Hikayeni Paylaş
          </a>
          <a href="#about" className="text-[#d9d9d9] hover:text-white transition-colors duration-200">
            Hakkımızda
          </a>
        </nav>
        
        <button 
          className="md:hidden text-[#d9d9d9]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-[#320604] shadow-lg py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a 
              href="#videos" 
              className="text-[#d9d9d9] hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Son Hikayeler
            </a>
            <a 
              href="#submit" 
              className="text-[#d9d9d9] hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hikayeni Paylaş
            </a>
            <a 
              href="#about" 
              className="text-[#d9d9d9] hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;