
import React, { useState } from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import type { Page } from '../App';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, onNavigate, currentPage }) => {
  const t = useTranslations(language);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { href: "#home", text: t.nav.home },
    { href: "#about", text: t.nav.about },
    { page: 'products' as Page, text: t.nav.products },
    { href: "#contact", text: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page?: Page, href?: string) => {
    setIsOpen(false);
    if (page) {
      e.preventDefault();
      onNavigate(page);
    } else if (href) {
      if (currentPage !== 'home') {
        e.preventDefault();
        onNavigate('home');
        // Wait for re-render then scroll
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-[#AEAEAE]/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center">
          <img src="./assets/logo-trans-white.png" alt={t.brand} className="h-10 md:h-12 object-contain" />
        </a>
        <nav className="hidden md:flex items-center justify-center space-x-8 rtl:space-x-reverse mx-auto" >
          {navLinks.map((link) => (
            <a
              key={link.page || link.href}
              href={link.href || '#'}
              onClick={(e) => handleNavClick(e, link.page, link.href)}
              className="text-gray-200 hover:text-[#AEAEAE] transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="border border-[#AEAEAE] text-[#AEAEAE] px-4 py-1 rounded-full hover:bg-[#AEAEAE] hover:text-white transition-colors duration-300 font-semibold"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.page || link.href}
                href={link.href || '#'}
                onClick={(e) => handleNavClick(e, link.page, link.href)} className="text-gray-200 hover:text-[#AEAEAE] transition-colors duration-300">
                {link.text}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="border border-[#AEAEAE] text-[#AEAEAE] px-4 py-1 rounded-full hover:bg-[#AEAEAE] hover:text-white transition-colors duration-300 font-semibold w-full"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
