import React, { createContext, useState, useContext, ReactNode } from 'react';
import { TraderData, fetchTraderData } from '../api/duneApi';

// Define the shape of our context
interface ContractContextType {
  searchedContract: string | null;
  isSearching: boolean;
  searchResults: TraderData[];
  error: string | null;
  isMockData: boolean;
  fetchContractData: (address: string) => Promise<void>;
  setSearchedContract: (address: string) => void;
  setIsSearching: (status: boolean) => void;
  setSearchResults: (results: TraderData[]) => void;
}

// Create the context with default values
const ContractContext = createContext<ContractContextType>({
  searchedContract: null,
  isSearching: false,
  searchResults: [],
  error: null,
  isMockData: false,
  fetchContractData: async () => {},
  setSearchedContract: () => {},
  setIsSearching: () => {},
  setSearchResults: () => {}
});

// Hook for using the context
export const useContract = () => useContext(ContractContext);

// Provider component
export const ContractProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [searchedContract, setSearchedContract] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<TraderData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState(false);

  // Function to fetch data and handle the response
  const fetchContractData = async (address: string) => {
    setIsSearching(true);
    setError(null);
    setIsMockData(false);
    
    try {
      console.log(`Fetching data for contract: ${address}`);
      
      // Demo mode handling
      const isDemo = address.toLowerCase() === 'example' || address.toLowerCase() === 'demo';
      if (isDemo) {
        console.log('Using demo mode with sample data');
        // Use a known working Solana token address for demo purposes
        address = '2VKBwYWzUbCUt8whqe3iA8TafXrMeE9MaLHcXqSrpump';
        setIsMockData(true);
      }
      
      // Fetch data (mock or real depending on API availability)
      const data = await fetchTraderData(address);
      
      // Check if data is available
      if (data.length === 0) {
        console.log('No data returned for address:', address);
        setError('No trading data found for this contract address. Please try another address or use "demo" to see sample data.');
        setSearchResults([]);
      } else {
        console.log(`Received ${data.length} traders`);
        
        // Identify if this is mock data
        if (isDemo || data.length >= 20) {
          setIsMockData(true);
        }
        
        // Sort by USD PNL (highest first)
        const sortedData = data.sort((a, b) => b.usd_pnl - a.usd_pnl);
        
        // Take top 10 traders
        const topTraders = sortedData.slice(0, 10);
        console.log(`Top 10 traders prepared for display`);
        
        setSearchResults(topTraders);
      }
      
      setSearchedContract(address);
    } catch (err: any) {
      console.error('Error fetching contract data:', err);
      
      // If we have a specific error message, use it
      let errorMessage = err.message || 'Failed to fetch trader data. Please try again later.';
      
      // Add a suggestion to use the demo mode
      errorMessage += ' You can try searching "demo" to see sample data.';
      
      setError(errorMessage);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <ContractContext.Provider 
      value={{
        searchedContract,
        isSearching,
        searchResults,
        error,
        isMockData,
        fetchContractData,
        setSearchedContract,
        setIsSearching,
        setSearchResults
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
