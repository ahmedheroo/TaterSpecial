
import React, { useState, useEffect } from 'react';
import type { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Oils from './components/Oils';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = language === 'ar' 
      ? "'Tajawal', sans-serif" 
      : "'Montserrat', sans-serif";
  }, [language]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Products language={language} />
        <Oils language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
