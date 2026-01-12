import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingMessageProps {
  message: string;
  onComplete?: () => void;
  speed?: number;
}

export const TypingMessage = ({ message, onComplete, speed = 30 }: TypingMessageProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [message, speed, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <p className="text-base md:text-lg leading-relaxed font-body text-foreground/90 whitespace-pre-line">
        {displayedText}
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block ml-1 text-primary"
          >
            |
          </motion.span>
        )}
      </p>
    </motion.div>
  );
};
