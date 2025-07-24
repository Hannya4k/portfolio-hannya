import { useEffect, useState } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________abcdefghijklmnopqrstuvwxyz0123456789";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function shouldScramble(wordIndex: number, totalWords: number): boolean {
  // Scramble roughly 30% of the words randomly
  return Math.random() < 0.3;
}

export const useScramble = (target: string, speed = 50, delay = 30) => {
  const [text, setText] = useState(target);

  useEffect(() => {
    const words = target.split(" ");
    const originalWords = [...words];
    const scrambledWords = [...words];
    const scrambleMap = words.map((_, i) => shouldScramble(i, words.length));

    let frame = 0;
    const maxFrames = Math.max(...words.map(w => w.length)) * 3;

    const interval = setInterval(() => {
      scrambledWords.forEach((word, i) => {
        if (!scrambleMap[i]) return;

        const original = originalWords[i];
        scrambledWords[i] = original
          .split("")
          .map((char, j) => {
            return j < Math.floor(frame / 3) ? char : randomChar();
          })
          .join("");
      });

      setText(scrambledWords.join(" "));

      if (frame > maxFrames) {
        setText(target);
        clearInterval(interval);
      }

      frame++;
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed, delay]);

  return text;
};
