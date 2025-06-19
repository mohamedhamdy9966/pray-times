import React from "react";

const quotes = [
  "Believe in yourself and all that you are.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is not in what you have, but who you are.",
  "Every day is a second chance.",
  "Push yourself, because no one else is going to do it for you.",
  "Your limitation—it's only your imagination.",
  "Dream it. Wish it. Do it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
];

const DailyQuote = () => {
  // Get number of days since Unix epoch
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  // Use dayIndex to rotate quotes
  const quoteOfTheDay = quotes[dayIndex % quotes.length];

  return (
    <div className="daily-quote p-4 border rounded shadow text-center max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-2">Quote of the Day</h2>
      <p className="text-gray-700 italic">"{quoteOfTheDay}"</p>
    </div>
  );
};

export default DailyQuote;
