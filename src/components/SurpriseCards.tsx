import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Gift, Star } from "lucide-react";

const surprises = [
  {
    icon: Heart,
    title: "Secret Love Note",
    message: "Every moment with you feels like magic. You make my heart smile in ways I never knew possible. 💕",
    color: "bg-primary",
  },
  {
    icon: Gift,
    title: "My Promise",
    message: "I promise to love you more each day, to make you laugh, and to be your partner in every adventure life brings us. 🎁",
    color: "bg-accent",
  },
  {
    icon: Star,
    title: "You Are...",
    message: "My sunshine on cloudy days, my peace in chaos, my favorite hello and hardest goodbye. You're my everything. ⭐",
    color: "bg-gold",
  },
];

export const SurpriseCards = () => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    if (revealedCards.includes(index)) {
      setRevealedCards(revealedCards.filter((i) => i !== index));
    } else {
      setRevealedCards([...revealedCards, index]);
    }
  };

  return (
    <div className="py-8">
      <motion.h3
        className="text-xl md:text-2xl font-display text-center mb-6 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tap to reveal surprises ✨
      </motion.h3>

      <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">
        {surprises.map((surprise, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => toggleCard(index)}
              className={`w-full h-full rounded-2xl ${surprise.color} shadow-romantic flex items-center justify-center transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotateY: revealedCards.includes(index) ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              {!revealedCards.includes(index) && (
                <surprise.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              )}
            </motion.button>

            <AnimatePresence>
              {revealedCards.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/50 backdrop-blur-sm"
                  onClick={() => toggleCard(index)}
                >
                  <motion.div
                    className="bg-card rounded-3xl p-6 max-w-sm shadow-heart border border-primary/20"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={`w-14 h-14 rounded-full ${surprise.color} flex items-center justify-center mx-auto mb-4`}>
                      <surprise.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-display text-center mb-3 text-foreground">
                      {surprise.title}
                    </h4>
                    <p className="text-sm md:text-base font-body text-center text-muted-foreground leading-relaxed">
                      {surprise.message}
                    </p>
                    <motion.button
                      className="mt-4 w-full py-2 text-sm text-primary font-body"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleCard(index)}
                    >
                      Tap to close ♥
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
