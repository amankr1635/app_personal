import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reasons = [
  "Your smile lights up my entire world",
  "The way you laugh at my silly jokes",
  "How you make even ordinary days feel special",
  "Your kindness towards everyone you meet",
  "The comfort I feel just being near you",
  "Your strength and determination inspire me",
  "How you always know what to say",
  "The way you look at me with love",
];

export const LoveReasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <div className="py-8">
      <motion.h3
        className="text-xl md:text-2xl font-display text-center mb-6 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Reasons I Love You 💕
      </motion.h3>

      <motion.div
        className="relative max-w-sm mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-romantic border border-primary/10 min-h-[160px] flex items-center justify-center">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center text-lg md:text-xl font-body text-foreground leading-relaxed"
          >
            "{reasons[currentIndex]}"
          </motion.p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <motion.button
            onClick={prev}
            className="p-2 rounded-full bg-primary/10 text-primary"
            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-1.5">
            {reasons.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                }`}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            className="p-2 rounded-full bg-primary/10 text-primary"
            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
