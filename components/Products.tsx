
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface ProductsProps {
  language: Language;
}

const Products: React.FC<ProductsProps> = ({ language }) => {
  const t = useTranslations(language);

  return (
    <section id="products" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">{t.products.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.products.items.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
                <p className="text-yellow-400 font-semibold mt-auto">{product.feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
