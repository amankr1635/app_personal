import { motion } from "framer-motion";
import { Sparkles } from "./Sparkles";
import { LoveReasonOuter } from "./loveReasonOuter";

interface StartScreenProps {
  onStart: () => void;
}


export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-romantic flex flex-col items-center justify-center z-50 px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Sparkles />
      
      {/* Intro Text */}
      <motion.p
        className="text-xl md:text-2xl text-foreground/80 font-body mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hey little…
      </motion.p>
      <LoveReasonOuter />
      
      <motion.p
        className="text-lg md:text-xl text-muted-foreground font-body mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Tap the heart 💕
      </motion.p>

      {/* Heart Button */}
      <motion.button
        onClick={onStart}
        className="relative group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Heart */}
        <motion.div
          className="relative text-8xl md:text-9xl cursor-pointer drop-shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      </motion.button>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className="text-sm text-primary/60"
            animate={{
              y: [0, -5, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};
