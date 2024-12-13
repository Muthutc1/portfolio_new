import React from 'react';
import { useRandomQuote } from '../utils/quotes';

const DailyQuote = () => {
  const quote = useRandomQuote();

  if (!quote) return null;

  return (
    <div className="glass-effect p-8 rounded-2xl animate-zoomInOut">
      <blockquote className="text-xl italic font-semibold text-blue-200">
        "{quote.text}"
        <footer className="text-blue-300 mt-4">- {quote.author}</footer>
      </blockquote>
    </div>
  );
};

export default DailyQuote;