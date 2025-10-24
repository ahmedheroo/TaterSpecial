
import React from 'react';
import type { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = useTranslations(language);

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>{t.footer.rights} | {t.brand}</p>
      </div>
    </footer>
  );
};

export default Footer;
