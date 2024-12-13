import { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
  category: 'success' | 'motivation' | 'leadership' | 'growth' | 'perseverance';
}

const quotes: Quote[] = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "perseverance"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "leadership"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "perseverance"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "growth"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "success"
  }
];

export const useRandomQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Get today's date as a string (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];
    
    // Use the date string to generate a consistent index for the day
    const dateNum = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = dateNum % quotes.length;
    
    setQuote(quotes[index]);
  }, []);

  return quote;
};

export const useRandomQuoteByCategory = (category: Quote['category']) => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const categoryQuotes = quotes.filter(q => q.category === category);
    const today = new Date().toISOString().split('T')[0];
    const dateNum = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = dateNum % categoryQuotes.length;
    
    setQuote(categoryQuotes[index]);
  }, [category]);

  return quote;
};