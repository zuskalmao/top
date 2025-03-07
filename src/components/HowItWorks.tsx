import React from 'react';
import { motion } from 'framer-motion';
import { Search, Database, BarChart, Star } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: 'Input Contract',
    description: 'Enter any Solana memecoin contract address into our search tool.',
    color: 'bg-primary-600'
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: 'Data Analysis',
    description: 'Our algorithm analyzes on-chain data to identify the top traders.',
    color: 'bg-secondary-600'
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: 'View Results',
    description: 'Access detailed insights about each trader\'s strategy and performance.',
    color: 'bg-primary-700'
  },
  {
    icon: <Star className="h-8 w-8 text-white" />,
    title: 'Make Decisions',
    description: 'Use these insights to inform your own trading strategy.',
    color: 'bg-secondary-700'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="analytics" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary-600 uppercase tracking-wider"
          >
            Analytics Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mt-2 text-gray-900 dark:text-white"
          >
            How <span className="text-primary-600">$TOP</span> Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          >
            Our advanced analytics platform gives you unparalleled insights into trader behavior.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cosmic-card flex flex-col items-center text-center"
            >
              <div className={`h-16 w-16 ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              
              {/* Only add connector if not the last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '40px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="absolute inset-0 bg-gradient-radial from-primary-300/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
