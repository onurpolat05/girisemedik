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
            <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center mr-3">
              <img src={process.env.PUBLIC_URL + '/favicon.svg'} alt="Girişemedik Logo" className="w-30 h-30" />
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