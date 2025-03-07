import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowRight, Copy, Check, Search, Loader2, AlertCircle, AlertTriangle } from 'lucide-react';
import { useContract } from '../context/ContractContext';

const TopTraders: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { searchedContract, isSearching, searchResults, error, isMockData } = useContract();

  const formatAddress = (address: string) => {
    if (!address) return '';
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

  const formatPnlPercentage = (percentage: number) => {
    return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
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
          
          {searchedContract && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
          )}
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
                {isSearching ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <Loader2 className="h-10 w-10 text-primary-500 animate-spin" />
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Analyzing contract data...</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">This may take a moment to process</p>
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <AlertCircle className="h-12 w-12 text-red-500" />
                        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">Error</p>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md">
                          {error}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : searchedContract && searchResults.length > 0 ? (
                  <motion.tbody
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {searchResults.map((trader, index) => (
                      <motion.tr 
                        key={index} 
                        variants={item}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          <div className="flex items-center">
                            <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-8 w-8 rounded-full flex items-center justify-center font-semibold">{index + 1}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-mono text-gray-600 dark:text-gray-300">{formatAddress(trader.wallet_address)}</span>
                            <button
                              className="text-gray-400 hover:text-primary-500 transition-colors"
                              onClick={() => copyToClipboard(trader.wallet_address, index)}
                            >
                              {copiedIndex === index ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          ${trader.entry_price.toFixed(6)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {formatNumber(trader.size_usd)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-medium ${trader.usd_pnl >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                            {formatNumber(trader.usd_pnl)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`flex items-center text-sm font-medium ${trader.pnl_percentage >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                            {trader.pnl_percentage >= 0 ? (
                              <TrendingUp className="h-4 w-4 mr-1" />
                            ) : (
                              <TrendingDown className="h-4 w-4 mr-1" />
                            )}
                            {formatPnlPercentage(trader.pnl_percentage)}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                ) : searchedContract ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <TrendingUp className="h-12 w-12 text-gray-300 dark:text-gray-600" />
                        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">No Data Available</p>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md">
                          We couldn't find trading data for this contract address. Try searching "demo" to see sample data.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <Search className="h-12 w-12 text-gray-300 dark:text-gray-600" />
                        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">Enter a contract address to analyze</p>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md">
                          Use the search bar above to enter a Solana memecoin contract address. 
                          <br /><span className="font-semibold">Try searching "demo" to see sample data.</span>
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {searchedContract && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center mx-auto"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm w-full text-center">
              Want to see more analytics? Enter another contract address in the search bar above.
            </p>
          </motion.div>
        )}
      </div>
      
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TopTraders;
