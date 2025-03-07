import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
                <span className="text-primary-600">$</span>TOP
              </span>
            </div>
            <p className="text-gray-900 dark:text-white mb-6 max-w-md">
              Your premier analytics token on Solana. Track the top traders of any memecoin instantly and make informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">Features</a>
              </li>
              <li>
                <a href="#analytics" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">Analytics</a>
              </li>
              <li>
                <a href="#community" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">Community</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-200 dark:border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-900 dark:text-white text-sm">
            &copy; {new Date().getFullYear()} $TOP. All rights reserved.
          </p>
          <p className="text-gray-900 dark:text-white text-sm mt-2 md:mt-0">
            Built on <span className="text-primary-600">Solana</span>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-primary-600"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-primary-600"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-primary-600 opacity--20"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
