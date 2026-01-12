import { motion } from "framer-motion";

export const FinalScreen = () => {
  return (
    <motion.div
      className="py-16 px-6 text-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Decorative hearts */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl text-primary/30"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
        className="text-6xl md:text-7xl mb-6"
      >
        💝
      </motion.div>

      <motion.h2
        className="text-2xl md:text-3xl font-display text-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        I'm so lucky to have you
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl font-body text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        Happy Birthday, always ❤️
      </motion.p>

      <motion.div
        className="flex justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        {[...Array(7)].map((_, i) => (
          <motion.span
            key={i}
            className="text-xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💕
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        className="mt-12 text-sm text-muted-foreground/60 font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        Made with all my love, just for you 💖
      </motion.p>
    </motion.div>
  );
};
