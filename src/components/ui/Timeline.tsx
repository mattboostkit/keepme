import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0); // State for active index

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Monitor scroll progress to update active index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numItems = data.length;
    // Approximate index based on scroll progress
    // Add a small offset (e.g., 0.1) to trigger highlight slightly earlier
    const calculatedIndex = Math.floor((latest + 0.1 / numItems) * numItems);
    // Clamp index within bounds
    const newIndex = Math.max(0, Math.min(numItems - 1, calculatedIndex));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <div
      className="w-full bg-white dark:bg-[#f4cfd9]/10 font-sans md:px-10"
      ref={containerRef}
    >
      {/* Removed the header and paragraph from the original component example */}
      {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div> */}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10" // Adjusted padding
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Apply conditional styling to the year title */}
              <h3 className={`hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-serif md:pl-20 transition-colors duration-300 ${ // Added font-serif
                  activeIndex === index ? 'text-[#f4cfd9] dark:text-[#f4cfd9]' : 'text-[#ffc0cb] dark:text-[#ffc0cb]'
                }`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Apply conditional styling to the mobile year title */}
              <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold font-serif transition-colors duration-300 ${ // Added font-serif
                  activeIndex === index ? 'text-[#f4cfd9] dark:text-[#f4cfd9]' : 'text-[#ffc0cb] dark:text-[#ffc0cb]'
                }`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-brand-pink via-brand-pink to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};