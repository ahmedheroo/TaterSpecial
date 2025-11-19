
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import Oils from './Oils';
import Contact from './Contact';
import type { Page } from '../App';

interface ProductPageProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ language, onNavigate }) => {
  const t = useTranslations(language);
  const isRtl = language === 'ar';

  return (
      <div> 
         <div className="animate-fade-in py-20 bg-gray-900 min-h-[calc(100vh-160px)]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
           <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-300 hover:text-[#AEAEAE] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" style={{ transform: isRtl ? 'scaleX(-1)' : 'scaleX(1)' }}>
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>{t.nav.back_to_home}</span>
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#AEAEAE]">{t.products.title}</h2>
           {/* Empty div for spacing to keep title centered */}
          <div className="w-32 hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.products.items.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
                <p className="text-[#AEAEAE] font-semibold mt-auto">{product.feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <Oils language={language} />
         {/* Scent Sprays Section */}
         <section className="py-1 bg-gray-900">
          {t.sprays && t.sprays.length > 0 && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-12 text-[#AEAEAE]">
              {t.sprays_title}
            </h2>
            <div className="grid grid-cols-1 gap-10">
              {t.sprays.map((spray) => (
                <div key={spray.id} className="bg-gray-800/30 rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
                  {/* Images */}
                  <div className="md:w-1/2 flex gap-4 p-6 justify-center items-center bg-gray-900/30">
                    {spray.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`${spray.name} ${idx + 1}`} className="w-1/2 object-contain rounded-lg max-h-80"/>
                    ))}
                  </div>
                  {/* Details */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center text-center md:text-start rtl:md:text-right bg-gray-900">
                    <h3 className="text-3xl font-bold mb-4 text-white">{spray.name}</h3>
                    <p className="text-gray-300 mb-6">{spray.description}</p>
                    <h4 className="text-xl font-semibold mb-4 text-white">{spray.scents_title}</h4>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {spray.scents.map((scent, idx) => (
                        <div key={idx} className="bg-gray-800/50 border border-[#6C6C6E] rounded-full py-2 px-4 text-center text-gray-200">
                          <span className="font-medium">{scent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
         </section>
        <Contact language={language} />
        </div>
  );
};

export default ProductPage;
