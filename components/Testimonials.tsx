import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { QuoteIcon } from './Icons';

interface TestimonialsProps {
  language: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const t = useTranslations(language);

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#AEAEAE]">{t.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#AEAEAE] transition-colors duration-300 flex flex-col"
            >
              <QuoteIcon />
              <blockquote className="text-gray-300 italic my-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-end mt-4">
                <p className="font-semibold text-white">- {testimonial.name}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;