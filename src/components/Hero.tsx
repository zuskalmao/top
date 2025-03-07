import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    // Create stars dynamically
    const container = starsContainerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Remove any existing stars
    container.innerHTML = '';
    
    // Create new stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 3 + 1;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
      star.style.setProperty('--delay', `${Math.random() * 3}s`);
      star.style.setProperty('--opacity', `${Math.random() * 0.7 + 0.3}`);
      
      container.appendChild(star);
    }
    
    // Create floating animation for rocket
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    gsap.to('.hero-rocket', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative pt-20 overflow-hidden min-h-screen flex flex-col justify-center">
      <div ref={starsContainerRef} className="stars-container"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 py-1 px-4 rounded-full text-sm font-medium inline-flex items-center"
          >
            <Rocket className="h-4 w-4 mr-2" />
            <span>Launching Soon on Solana</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight text-gray-900 dark:text-white"
          >
            Reach the <span className="gradient-text">TOP</span> with <br /> 
            <span className="text-primary-600">Elite</span> Analytics
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl"
          >
            $TOP gives you unprecedented insights into the trading activity of any Solana memecoin. Track the top traders, analyze their strategies, and make informed decisions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-2xl"
          >
            <SearchBar />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 to-transparent opacity-50 z-0"></div>
      
      <div className="hero-rocket absolute right-[10%] top-1/4 hidden md:block z-0">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-primary-500/20 rounded-full blur-2xl"></div>
          <Rocket className="h-20 w-20 text-primary-500" />
        </motion.div>
      </div>
      
      <div className="absolute left-[15%] bottom-1/4 hidden md:block z-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-secondary-500/20 rounded-full blur-2xl"></div>
          <TrendingUp className="h-16 w-16 text-secondary-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
