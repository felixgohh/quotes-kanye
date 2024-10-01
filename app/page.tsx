'use client';

import Button from '@/components/Button';
import { useQuoteContext } from '@/context/QuoteContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const { setFavorite } = useQuoteContext();
  const [quotes, setQuotes] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const data = await fetch('https://api.kanye.rest');
      const res = await data.json();
      setQuotes(res.quote);
    } catch (err) {
      setError(`Failed to fetch quote with error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <section className="flex flex-col my-12">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p className="min-h-20 max-h-20 text-xl italic text-center">
            {loading ? 'Loading...' : `“${quotes}”`}
          </p>
          <div className="flex flex-row gap-10 justify-center items-center">
            <Button
              title="New Quote"
              type="button"
              onClick={() => {
                if (!loading) fetchQuotes();
              }}
            />
            <Button
              title="Add to Favorites"
              type="button"
              onClick={() => {
                if (!loading) setFavorite(quotes);
              }}
            />
          </div>
        </>
      )}
    </section>
  );
}
