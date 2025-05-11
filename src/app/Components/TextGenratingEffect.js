"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/libs/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.25
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.1),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div style={{delay:1}} ref={scope} >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" opacity-0 text-[1.2rem] leading-2"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium text-zinc-400 md:w-[60%] text-center w-[95%] ", className)}>
      <div className="mt-4">
        <div
          className=" text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] backdrop-blur-sm bg-zinc-900/10 xl:text-[1.6rem]  ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
