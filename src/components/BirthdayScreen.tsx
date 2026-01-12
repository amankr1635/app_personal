import { motion } from "framer-motion";
import { FloatingHearts } from "./FloatingHearts";
import { Sparkles } from "./Sparkles";
import { TypingMessage } from "./TypingMessage";
import { SurpriseCards } from "./SurpriseCards";
import { LoveReasons } from "./LoveReasons";
import { FinalScreen } from "./FinalScreen";
import { MusicToggle } from "./MusicToggle";
import { MemoryGallery } from "./MemoryGallery";
import { useRef, useState, useEffect } from "react";

const birthdayMessage = `Happy Birthday, my love ❤️

Today isn't just your birthday… it's the day the world became more beautiful.
On 19th January, someone truly special was born — someone who unknowingly would become my safest place, my biggest smile, and my favorite person.

You have this incredible way of making everything feel lighter just by being yourself. Your smile heals, your voice comforts, and your presence makes even ordinary moments feel magical.

Thank you for being patient with me, for believing in me, and for loving me in ways I didn't even know I needed. Life feels kinder, happier, and more meaningful with you by my side.

I hope this year brings you everything your heart desires — success in your dreams, peace in your soul, and countless reasons to smile. And through it all, I promise to stand beside you, cheering you on, loving you more with every passing day.

You are not just my girlfriend — you are my best friend, my inspiration, and my favorite forever.

Happy Birthday, my love. Today, tomorrow, and always — it's you. 💕`;

export const BirthdayScreen = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Start music when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Auto-play was prevented, user needs to interact
        setIsPlaying(false);
      });
    }

    // Show message after a short delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-romantic relative overflow-x-hidden">
      {/* Background Audio */}
      {/* <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      /> */}
      <audio ref={audioRef} loop src="../ringtone.mp3" />

      <FloatingHearts />
      <Sparkles />
      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />

      <div className="relative z-10 px-4 md:px-8 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-5xl md:text-6xl mb-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎂
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-display text-foreground mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Happy Birthday,
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl font-display text-gradient-romantic mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            My Love ❤️
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-body text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            19th January
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-0.5 bg-primary/40 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>

        {/* Birthday Message */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-romantic border border-primary/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {showMessage && <TypingMessage message={birthdayMessage} speed={25} />}
        </motion.div>

        {/* Surprise Cards */}
        <SurpriseCards />

        {/* Memory Gallery */}
        <MemoryGallery />

        {/* Love Reasons */}
        <LoveReasons />

        {/* Final Screen */}
        <FinalScreen />
      </div>
    </div>
  );
};
