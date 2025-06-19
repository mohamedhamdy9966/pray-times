import React from "react";

const quotes = [
  "You Are The Ashter Shatoura.",
  "Be your own kind of beautiful.",
  "A girl should be two things: who and what she wants. — Coco Chanel",
  "I believe in being strong when everything seems to be going wrong. — Audrey Hepburn",
  "If you are always trying to be normal, you'll never know how amazing you can be. — Maya Angelou",
  "Who run the world? Girls. — Beyoncé",
  "Courage is like a muscle. We strengthen it by use. — Ruth Gordon",
  "Every great dream begins with a dreamer. — Harriet Tubman",
  "The most effective way to do it, is to do it. — Amelia Earhart",
  "No one can make you feel inferior without your consent. — Eleanor Roosevelt",
  "Girls should never be afraid to be smart. — Emma Watson",
  "A girl doesn't need anyone who doesn't need her. — Marilyn Monroe",
  "Well-behaved women seldom make history. — Laurel Thatcher Ulrich",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Nothing can dim the light that shines from within. — Maya Angelou",
  "Confidence is not ‘they will like me.’ Confidence is ‘I’ll be fine if they don’t.’",
  "You are more powerful than you know; you are beautiful just as you are. — Melissa Etheridge",
  "The best protection any woman can have is courage. — Elizabeth Cady Stanton",
  "You can do anything you set your mind to. — Ben Franklin",
  "Be a girl with a mind, a woman with attitude, and a lady with class.",
  "I’m tough, I’m ambitious, and I know exactly what I want. — Madonna",
  "You are allowed to be both a masterpiece and a work in progress simultaneously. — Sophia Bush",
  "She believed she could, so she did.",
  "Don’t let anyone dull your sparkle.",
  "You are enough, just as you are.",
  "Little girls with dreams become women with vision.",
  "Behind every successful woman is herself.",
  "Don’t wait for opportunity. Create it.",
  "She remembered who she was and the game changed. — Lalah Delia",
  "Throw kindness around like confetti.",
  "You are capable of amazing things.",
  "Don’t be the girl who fell. Be the girl who got back up.",
  "Slay your own dragons, princess.",
  "Strong is the new pretty.",
  "Some women fear the fire. Some women simply become it. — R.H. Sin",
  "Happiness looks good on you.",
  "Act like a lady, think like a boss.",
  "Smart girls open their books before their mouths.",
  "You were given this life because you are strong enough to live it.",
  "Darling, you are magic.",
  "The woman who does not require validation from anyone is the most feared individual. — Mohadesa Najumi",
  "Beauty begins the moment you decide to be yourself. — Coco Chanel",
  "Girls compete, women empower.",
  "Your vibe attracts your tribe.",
  "Don’t be eye candy. Be soul food.",
  "Don’t let small minds convince you that your dreams are too big.",
  "Do something today that your future self will thank you for.",
  "Be a voice, not an echo.",
  "You are the author of your own story.",
  "You are a queen. Own your crown.",
  "Don’t shrink yourself to fit into places you’ve outgrown.",
  "Your dreams are valid. — Lupita Nyong’o",
  "Know your worth. Then add tax.",
  "Stay strong. Make them wonder how you’re still smiling.",
  "Create the life you can’t wait to wake up to.",
  "Fall seven times, stand up eight. — Japanese Proverb",
  "Stars can’t shine without darkness.",
  "Do it with passion or not at all.",
  "Be proud of who you are, and not ashamed of how someone else sees you.",
  "Grow through what you go through.",
  "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
  "You get in life what you have the courage to ask for. — Oprah Winfrey",
  "Don't be afraid to sparkle a little brighter.",
  "If opportunity doesn't knock, build a door. — Milton Berle",
  "Start each day with a grateful heart.",
  "You are stronger than you think.",
  "Believe in your infinite potential.",
  "It’s not your job to be liked. It’s your job to be yourself.",
  "You can rise up from anything.",
  "Make today so awesome that yesterday gets jealous.",
  "Life is tough, darling, but so are you.",
  "The world needs that special gift that only you have. — Marie Forleo",
  "Go confidently in the direction of your dreams. — Henry David Thoreau",
  "No rain, no flowers.",
  "You are magic. Don’t ever apologize for the fire in you.",
  "Don’t forget: you’re amazing.",
  "Life is not about finding yourself, it’s about creating yourself.",
  "Inhale confidence, exhale doubt.",
  "You have the power to change the world — just start with your own.",
  "Stop doubting yourself. Work hard and make it happen.",
  "Never underestimate the power of a girl with a book. — Ruth Bader Ginsburg",
  "There’s nothing a girl can’t do when she decides to.",
  "You were born to stand out.",
  "Your life isn’t yours if you always care what others think.",
  "Self-confidence is the best outfit. Rock it and own it.",
  "You are enough.",
  "Don’t adapt to the energy in the room. Influence the energy in the room.",
  "Work hard in silence. Let success be your noise.",
  "Smile. Sparkle. Shine.",
  "Be the girl who just went for it.",
  "The only limit is your mind.",
  "Be kind, be brave, be unstoppable.",
  "Focus on the step in front of you, not the whole staircase.",
  "You’ve got this.",
  "Glow up and show up.",
  "Your only competition is who you were yesterday.",
  "The secret to getting ahead is getting started.",
  "She’s a wildflower, strong and free.",
  "Keep your heels, head, and standards high. — Coco Chanel",
  "If you want something said, ask a man. If you want something done, ask a woman. — Margaret Thatcher",
  "Never stop learning, because life never stops teaching.",
  "She’s a warrior in heels.",
  "Take up space. You deserve to be here.",
  "Be so good they can’t ignore you. — Steve Martin",
];

const DailyQuote = () => {
  // Calculate the day index from Unix Epoch to rotate quotes daily
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const quoteOfTheDay = quotes[dayIndex % quotes.length];

  return (
    <div className="daily-quote flex justify-center p-6 border-2 border-violet-300 rounded-2xl shadow-xl text-center max-w-2xl mx-auto mt-10 bg-white">
      <h6 className="text-sm font-semibold mb-2 text-violet-800 tracking-wide uppercase">
        Just a small reminder of how precious you are to me 💌
      </h6>

      <h2 className="text-lg md:text-2xl font-bold mb-4 text-violet-900 leading-snug">
        Quote of the Day for the One & Only Lovely <span className="text-pink-500">🌸 Moni ❤️</span>  
        <br />
        Come back tomorrow for a new quote, my princess 🐈
      </h2>

      <p className="text-violet-600 italic text-2xl md:text-4xl font-medium mt-6 px-4">
        “{quoteOfTheDay}”
      </p>
    </div>
  );
};

export default DailyQuote;