import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search delay - in a real app this would be an API call
    setTimeout(() => {
      setIsSearching(false);
      // Scroll to results section
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  return (
    <motion.div 
      className="cosmic-border w-full"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <form onSubmit={handleSearch} className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isSearching ? (
            <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <input
          type="text"
          className="input pl-12 pr-24 py-4 w-full text-base shadow-lg focus:shadow-xl transition-shadow"
          placeholder="Enter Solana memecoin contract address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={isSearching}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            type="submit"
            disabled={isSearching || !searchQuery.trim()}
            className={`btn ${isSearching || !searchQuery.trim() ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'} py-2 px-4 text-sm`}
          >
            Analyze
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SearchBar;
