import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ExitPopup from './components/ExitPopup';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      setShowExitPopup(true);
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-gradient-to-br from-navy via-dark-blue to-navy transition-all duration-500">
        <div className="fixed inset-0 bg-pattern opacity-5 mix-blend-overlay pointer-events-none animate-pattern"></div>
        <div className="fixed inset-0 bg-gradient-radial from-sky-blue/5 via-transparent to-transparent mix-blend-overlay pointer-events-none animate-pulse"></div>
        <Toaster 
          position="top-right"
          toastOptions={{
            className: 'bg-dark-blue text-white',
          }} 
        />
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ExitPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
    </>
  );
}

export default App