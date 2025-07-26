import React, { useState, useEffect } from "react";
import { words } from "../variables";
export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 50 : isPaused ? 2000 : 100);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Dhruv Gadre</h1>
        <div className="text-2xl mb-4 h-8 flex items-center justify-center">
          <span className="text-blue-400">
            {currentText}
            <span className="animate-pulse text-white">|</span>
          </span>
        </div>
        <p className="text-xl">A passionate developer building beautiful experiences.</p>
      </div>
    </section>
  );
}
