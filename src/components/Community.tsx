import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary-600 uppercase tracking-wider">
              Join Our Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6 text-gray-900 dark:text-white">
              Be Part of the <span className="text-primary-600">$TOP</span> Movement
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Connect with fellow traders, share strategies, and stay up to date with the latest developments in the Solana memecoin ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Twitter className="h-5 w-5 mr-2" />
                Follow on Twitter
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <MessageCircle className="h-5 w-5 mr-2" />
                Join Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Community;
