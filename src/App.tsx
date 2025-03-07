import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TopTraders from './components/TopTraders';
import Community from './components/Community';
import Footer from './components/Footer';
import { ContractProvider } from './context/ContractContext';

function App() {
  // Add a class to the body for the cosmic theme
  useEffect(() => {
    document.body.classList.add('gradient-animation');
    return () => {
      document.body.classList.remove('gradient-animation');
    };
  }, []);

  return (
    <ContractProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <TopTraders />
          <Community />
        </main>
        <Footer />
      </div>
    </ContractProvider>
  );
}

export default App;
