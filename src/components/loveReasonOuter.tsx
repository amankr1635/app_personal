import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const loveReasons = [
  "Taking care of me",
  "Handling my anger",
  "Always being there when I needed you",
  "Understanding me without words",
  "Making me feel loved",
];

export const LoveReasonOuter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loveReasons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10 text-center">
      {/* Fixed Line */}
      <p className="text-lg md:text-xl font-body text-foreground/90 mb-2">
        I love you for
      </p>

      {/* Changing Line */}
      <div className="h-[32px] md:h-[36px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-lg md:text-xl font-medium text-pink-500"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {loveReasons[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
