import React, { useState, useEffect } from 'react';
import { Search, Rocket, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Rocket className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold font-display tracking-tight">
              <span className="text-primary-600">$</span>
              <span className="dark:text-white">TOP</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href="#features" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Features
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="#analytics" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Analytics
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="#community" 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Community
            </motion.a>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="cosmic-border"
            >
              <a href="#analytics" className="btn btn-primary text-sm">
                <Search className="h-4 w-4 mr-2" />
                Analyze Now
              </a>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#features" className="block text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                Features
              </a>
              <a href="#analytics" className="block text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                Analytics
              </a>
              <a href="#community" className="block text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                Community
              </a>
              <a href="#analytics" className="btn btn-primary text-sm w-full flex justify-center">
                <Search className="h-4 w-4 mr-2" />
                Analyze Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
