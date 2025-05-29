"use client";
import React, { useRef } from "react"; // Removed useEffect, useState
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Adjusted import path

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode; // Removed 'any'
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null); // Ref back on main container
  const { scrollYProgress } = useScroll({
    container: ref, // Use internal container for scroll tracking
    offset: ["start start", "end start"] // Original offset
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Revert to breakpoint calculation
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Light mode background colors
  const backgroundColors = [
    "rgb(255 255 255)", // white
    "rgb(249 250 251)", // gray-50
    "rgb(243 244 246)", // gray-100
  ];

  // Removed gradient logic

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      // Added back fixed height and overflow-y-auto
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref} // Moved ref back here
    >
      <div className="relative flex items-start px-4">
        {/* Removed bottom padding */}
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-800" // Changed text color
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-gray-600 max-w-sm mt-10" // Changed text color
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* Added back fixed h-40 spacer */}
          <div className="h-40" />
        </div>
      </div>
      {/* Removed style attribute, changed background */}
      <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-gray-100 sticky top-10 overflow-hidden", // Changed bg color
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
