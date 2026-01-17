"use client"; // Required for React hooks in App Router

import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = ["Hi, I’m Alfie 👋", "Web Developer", "I love Websites"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhrase];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause at full phrase
        }
      } else {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length); // loop phrases
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhrase, phrases]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
        {displayedText}
        <span className="blinking-cursor">|</span>
      </h1>

      <p className="text-white/70 max-w-xl mb-8">
        Aspiring Web Developer building websites with React, Next.js,
        TypeScript, and Tailwind CSS.
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-80 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Blinking cursor style */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: white;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
