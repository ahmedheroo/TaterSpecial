
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface OilsProps {
  language: Language;
}

const Oils: React.FC<OilsProps> = ({ language }) => {
  const t = useTranslations(language);

    return (
    <section id="oils" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">{t.oils.title}</h2>
        <p className="max-w-3xl mx-auto mb-10 text-gray-300">{t.oils.description}</p>
        <h3 className="text-2xl font-semibold mb-8 text-white">{t.oils.list_title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {t.oils.list.map((oil, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg py-5 px-3 flex items-center justify-center text-center text-gray-200 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
              <span className="font-medium text-lg">{oil}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Oils;
