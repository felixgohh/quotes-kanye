'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

type QuoteContextType = {
  favoriteQuotes: string[];
  setFavorite: (quotes: string) => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [favoriteQuotes, setFavoriteQuotes] = useState<string[]>([]);

  const setFavorite = (quotes: string) => {
    if (favoriteQuotes.includes(quotes)) {
      return toast.error('This quotes has been added to your favorite list', {
        position: 'top-center',
        theme: 'colored',
        hideProgressBar: true,
        closeButton: false,
        autoClose: 3500,
        toastId: 'toast-error',
      });
    }

    setFavoriteQuotes([...favoriteQuotes, quotes]);
  };

  return (
    <QuoteContext.Provider value={{ favoriteQuotes, setFavorite }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuoteContext() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuoteContext must be used within a QuoteProvider');
  }
  return context;
}
