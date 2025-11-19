import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { ServiceIcon, PriceIcon, QualityIcon, SprayIcon, DiffuserIcon, OilBottleIcon } from './Icons';

interface HeroProps {
  language: Language;
}

const iconMap: { [key: string]: React.FC } = {
  ServiceIcon,
  PriceIcon,
  QualityIcon,
  SprayIcon,
  DiffuserIcon,
  OilBottleIcon,
};

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = useTranslations(language);

  const features = language === 'en' ? [...t.hero.features].reverse() : t.hero.features;

  return (
    <section id="home"
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center text-white p-4"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('./assets/banner2.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center justify-center container mx-auto px-6 h-full">
          <h2 
            className="text-5xl md:text-5xl font-bold leading-tight" 
            style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.7)' ,paddingTop: '160px'}}
          >
            {t.hero.title}
          </h2>
          <p 
            className="text-3xl md:text-3xl max-w-4xl mx-auto mt-4" 
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            {t.hero.subtitle}
          </p>
 

        <div className="w-full max-w-6xl mt-auto mb-8">
          <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-2">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div key={index} className="flex flex-col items-center gap-2 text-white text-center">
                    {IconComponent && <IconComponent />}
                    <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
