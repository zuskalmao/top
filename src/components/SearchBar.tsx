import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContract } from '../context/ContractContext';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchContractData, isSearching } = useContract();
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Call the contract data fetching function
    await fetchContractData(searchQuery.trim());
    
    // Scroll to results section
    const resultsElement = document.getElementById('results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
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
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            type="submit"
            disabled={!searchQuery.trim() || isSearching}
            className={`btn ${!searchQuery.trim() || isSearching ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'} py-2 px-4 text-sm`}
          >
            {isSearching ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SearchBar;
