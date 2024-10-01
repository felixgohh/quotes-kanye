'use client';

import Button from '@/components/Button';
import { useQuoteContext } from '@/context/QuoteContext';
import React, { useState } from 'react';

export default function Page() {
  const { setFavorite } = useQuoteContext();
  const [newQuote, setNewQuote] = useState('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuote(ev.target.value);
  };

  return (
    <section className="flex flex-col border-2 px-6 py-4 rounded-lg w-[45%] h-fit border-black shadow-thick">
      <h2 className="text-xl mb-5 font-bold">My Quotes</h2>
      <form className="flex flex-col">
        <label htmlFor="quoteInput" className="sr-only">
          Add a new quote
        </label>
        <input
          type="text"
          id="quoteInput"
          value={newQuote}
          onChange={handleChange}
          className="p-2 mb-4 rounded-md border border-gray-400 outline-none"
          placeholder="Lorem ipsum..."
        />
        <Button
          title="Add Quote"
          onClick={() => {
            setNewQuote('');
            setFavorite(newQuote);
          }}
        />
      </form>
    </section>
  );
}
