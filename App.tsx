
import React, { useState, useEffect } from 'react';
import type { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ProductPage from './components/ProductPage';

export type Page = 'home' | 'products';

function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = language === 'ar'
      ? "'Tajawal', sans-serif"
      : "'Cairo', sans-serif";
  }, [language]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header
        language={language}
        setLanguage={setLanguage}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero language={language} onNavigate={setCurrentPage} />
            <AboutUs language={language} />
            <InfoSections language={language} />
            <Products language={language} onNavigate={setCurrentPage}/>
            <Testimonials language={language} />
            <Contact language={language} />
          </>
        ) : (
          <ProductPage language={language} onNavigate={setCurrentPage} />
        )
        }
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
