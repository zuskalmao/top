import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowRight, Copy, Check } from 'lucide-react';
import Award from './Award';

// Empty array for traders (removed mockup data)
const mockTraders: any[] = [];

const TopTraders: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchedContract, setSearchedContract] = useState('BONK4iBVxpecjyzboHJKoWHbJX42jgH4e4fGpEBXMGGe');

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const copyToClipboard = (address: string, index: number) => {
    navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="results" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary-600 uppercase tracking-wider"
          >
            Analytics Results
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mt-2 text-gray-900 dark:text-white"
          >
            Top Traders <span className="text-primary-600">Leaderboard</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            <span>Contract Analyzed:</span>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center">
              <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">{formatAddress(searchedContract)}</span>
              <button
                className="ml-2 text-gray-400 hover:text-primary-500 transition-colors"
                onClick={() => copyToClipboard(searchedContract, -1)}
              >
                {copiedIndex === -1 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="bg-white dark:bg-gray-800/60 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/30 dark:border-gray-700/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Address</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Entry Price</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">PNL</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">PNL %</th>
                </tr>
              </thead>
              <tbody>
                {mockTraders.length > 0 ? (
                  <motion.tbody
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {mockTraders.map((trader, index) => (
                      <motion.tr 
                        key={index} 
                        variants={item}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                            {index + 1}
                            {index < 3 && (
                              <span className="ml-2">
                                <Award className={`h-4 w-4 ${
                                  index === 0 ? 'text-yellow-500' : 
                                  index === 1 ? 'text-gray-400' : 
                                  'text-amber-700'
                                }`} />
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900 dark:text-white font-mono">
                              {formatAddress(trader.address)}
                            </div>
                            <button
                              className="ml-2 text-gray-400 hover:text-primary-500 transition-colors"
                              onClick={() => copyToClipboard(trader.address, index)}
                            >
                              {copiedIndex === index ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">${trader.entry.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{formatNumber(trader.sizeUSD)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-green-600 dark:text-green-500">
                            +{formatNumber(trader.pnlUSD)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-500">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            +{trader.pnlPercent}%
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-gray-500 dark:text-gray-400">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <TrendingUp className="h-10 w-10 text-gray-300 dark:text-gray-600" />
                        <p className="text-lg font-medium">No trader data available</p>
                        <p className="text-sm">Enter a contract address in the search bar to analyze top traders</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center mx-auto"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm w-full text-center">
            Want to see more analytics? Enter another contract address in the search bar above.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TopTraders;
