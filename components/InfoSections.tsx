
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { QualityIcon, EleganceIcon, InnovationIcon, WellbeingIcon } from './InfoIcons';

interface InfoSectionsProps {
  language: Language;
}

const valueIcons = [
  <QualityIcon key="quality" />,
  <EleganceIcon key="elegance" />,
  <InnovationIcon key="innovation" />,
  <WellbeingIcon key="wellbeing" />,
];

const InfoSections: React.FC<InfoSectionsProps> = ({ language }) => {
  const t = useTranslations(language);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 space-y-20">

        {/* About Us Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#AEAEAE]">{t.info.about.title}</h2>
          <p className="text-lg text-white leading-relaxed">{t.info.about.content}</p>
        </div>

        {/* Our Values Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#AEAEAE]">{t.info.values.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.info.values.items.map((value, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#AEAEAE] transition-all duration-300 transform hover:scale-105">
                {valueIcons[index]}
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Vision Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#AEAEAE]">{t.info.vision.title}</h2>
          <blockquote className="text-xl md:text-2xl text-white italic border-s-4 border-[#AEAEAE] ps-4 text-start">
            "{t.info.vision.content}"
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default InfoSections;
