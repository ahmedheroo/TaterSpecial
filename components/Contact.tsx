
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { TiktokIcon, InstagramIcon, PhoneIcon, WhatsappIcon } from './Icons';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = useTranslations(language);
  const phoneNumbers = ["0593883279", "0544365475"];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">{t.contact.title}</h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-300">{t.contact.description}</p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Phone & WhatsApp */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">{t.contact.phone_whatsapp}</h3>
            <div className="space-y-3">
              {phoneNumbers.map((num, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={`tel:${num}`} className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors">
                    <PhoneIcon />
                    <span>{num}</span>
                  </a>
                  <a href={`https://wa.me/${num.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-200 hover:text-green-400 transition-colors">
                    <WhatsappIcon />
                    <span>{num}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">{t.contact.social_media}</h3>
            <div className="flex justify-center space-x-6 rtl:space-x-reverse">
              <a href="https://www.instagram.com/tater_special/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-transform transform hover:scale-110">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@tater.sa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-transform transform hover:scale-110">
                <TiktokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
