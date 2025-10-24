
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = useTranslations(language);

  return (
    <section 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/luxuryhome/1600/900')" }}
      ></div>
      <div className="relative z-20 container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>{t.hero.title}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>{t.hero.subtitle}</p>
        <a 
          href="#products"
          className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
