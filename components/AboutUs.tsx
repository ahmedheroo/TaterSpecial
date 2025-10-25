
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface AboutUsProps {
  language: Language;
}

const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const t = useTranslations(language);

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rtl:md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">{t.about.title}</h2>
            <div className="space-y-4 text-gray-300 md:text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
          <div className="order-1 md:order-2 rtl:md:order-1">
            <img 
              src="./assets/logo.png" 
              alt="Luxurious ingredients for aromatic oils" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
