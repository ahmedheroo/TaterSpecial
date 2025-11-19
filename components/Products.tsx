import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { DiscoverDiffuserIcon, OilDropIcon, DiscoverSprayIcon } from './Icons';
import type { Page } from '../App';

interface ProductsProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const categoryIcons = [
  <DiscoverDiffuserIcon key="diffuser" />,
  <OilDropIcon key="oil" />,
  <DiscoverSprayIcon key="spray" />,
];

const Products: React.FC<ProductsProps> = ({ language, onNavigate }) => {
  const t = useTranslations(language);
  return (
    <section id="products-discover" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#AEAEAE]">{t.discover.title}</h2>
        <p className="max-w-2xl mx-auto mb-12 text-white">{t.discover.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.discover.cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-transparent hover:border-[#AEAEAE]/50 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 text-[#AEAEAE] group-hover:scale-110 transition-transform duration-300">
                {categoryIcons[index]}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => onNavigate('products')}
          className="bg-[#FFFFFF] text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-[#AEAEAE] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#AEAEAE]/20 inline-block"
        >
          {t.discover.cta}
        </button>
      </div>
    </section>
  );
};

export default Products;