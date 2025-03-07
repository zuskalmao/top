import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  Award, 
  LineChart 
} from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-primary-500" />,
    title: 'Top Trader Insights',
    description: 'Identify the most successful traders for any Solana memecoin and learn from their strategies.'
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-500" />,
    title: 'Real-time Analytics',
    description: 'Get up-to-the-minute data on trading patterns and market movements as they happen.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-500" />,
    title: 'Risk Assessment',
    description: 'Evaluate potential investments with comprehensive risk metrics and historical performance data.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary-500" />,
    title: 'Community Intelligence',
    description: 'Access crowd-sourced insights from the most successful traders in the Solana ecosystem.'
  },
  {
    icon: <Award className="h-6 w-6 text-primary-500" />,
    title: 'Premium Alerts',
    description: 'Receive notifications when top traders make significant moves in the market.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary-500" />,
    title: 'Performance Tracking',
    description: 'Monitor the historical performance of any trader to identify consistent winners.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-primary-600 uppercase tracking-wider"
          >
            Key Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mt-2 text-gray-900 dark:text-white"
          >
            Why Choose <span className="text-primary-600">$TOP</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          >
            Our advanced analytics platform gives you the edge in the competitive world of Solana memecoins.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5 }}
              className="cosmic-card group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
