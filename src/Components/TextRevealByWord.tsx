import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "../utilis";
import React from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");
  const highlightedWords = ["Fitness", "Planet", "Our", "mission", "goals","continuously" , "updating" , "fitness",  "programs" ,"Physical" , "health" , "mental" ,"well-being" , "journey" , "goals" ,"community" , "members"];

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 font-samu text-2xl font-bold text-white dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-4xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const isHighlighted = highlightedWords.includes(word);
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlighted={isHighlighted}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  isHighlighted: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isHighlighted }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={isHighlighted ? "text-blue-500 dark:text-blue-400" : "text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
