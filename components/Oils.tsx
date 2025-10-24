
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {t.oils.list.map((oil, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-2 text-center text-gray-200 hover:bg-yellow-400/10 hover:border-yellow-400 transition-colors duration-300">
              <span className="font-medium">{oil}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Oils;
