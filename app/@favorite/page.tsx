'use client';

import { useQuoteContext } from '@/context/QuoteContext';

export default function Page() {
  const { favoriteQuotes } = useQuoteContext();

  return (
    <section className="flex flex-col rounded-lg border-2 border-black p-6 py-4 w-1/2 shadow-thick">
      <h2 className="text-xl mb-5 font-bold">Favorite Quotes</h2>
      {favoriteQuotes && favoriteQuotes.length ? (
        <ol className="list-decimal pl-4 flex flex-col gap-2">
          {favoriteQuotes.map((quotes) => (
            <li key={quotes}>“{quotes}”</li>
          ))}
        </ol>
      ) : (
        <p>No favorites quotes yet!</p>
      )}
      <ul></ul>
    </section>
  );
}
