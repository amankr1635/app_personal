import { motion } from "framer-motion";

const memories = [
  {
    id: 1,
    placeholder: "💕",
    image:"../image/IMG_20220628_064906.jpg",
    // image: "https://drive.google.com/file/d/16fp3wxkHfL7rBQ-BdWsui6b_ZiacuMmt/view?usp=drive_link",
    // image: "https://drive.google.com/file/d/16fp3wxkHfL7rBQ-BdWsui6b_ZiacuMmt/view",
    caption: "Our first memory together",
  },
  {
    id: 2,
    placeholder: "🌸",
    image:"../image/IMG_20230529_054657.jpg",
    // image: "https://drive.google.com/file/d/1KHcC6aV9TfYSqvXbywsgJ912kF0YmCVd/view?usp=sharing",
    caption: "A moment I'll never forget",
  },
  {
    id: 3,
    placeholder: "✨",
    image:"../image/IMG_20230422_125851.jpg",
    // image: "https://drive.google.com/file/d/1pmWk7lQP1LmNxVb1hfnGdbC1p1UiTcwU/view?usp=sharing",
    caption: "You make everything beautiful",
  },
  {
    id: 4,
    placeholder: "🌹",
    image:"../image/IMG-20240823-WA0011.jpg",
    // image: "https://drive.google.com/file/d/1duVNXphzDZgk3-W2m98VqzYgkHYHq62P/view?usp=sharing",
    caption: "Forever grateful for you",
  },
];

export const MemoryGallery = () => {
  return (
    <motion.div
      className="my-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-display text-center text-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Cherished Moments 📷
      </motion.h3>

      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            {/* Hanging thread */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-px h-3 bg-primary/30" />

            {/* Pendulum animation wrapper */}
            <motion.div
              className="origin-top"
              animate={{
                rotate: index % 2 === 0 ? [2, -2, 2] : [-2, 2, -2],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Photo frame */}
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-3 shadow-romantic border border-primary/10 overflow-hidden">
                {/* Image placeholder - replace src with actual photos */}
                {/* <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl md:text-5xl">{ memory.placeholder}</span>
                  Uncomment and add your image:
                  <img 
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                  />
                 
                </div> */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30">

                  {/* Image (if present) */}
                  {memory.image && (
                    <img
                      src={memory.image || memory.placeholder}
                      alt={memory.caption} 
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Placeholder emoji (always visible, classy overlay) */}
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                    <span className="text-3xl md:text-4xl">
                      {memory.placeholder}
                    </span>
                  </div> */}

                </div>

                {/* Caption */}
                <p className="text-xs md:text-sm font-body text-muted-foreground text-center mt-2 italic">
                  {memory.caption} {memory.placeholder}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative element */}
      <motion.div
        className="flex justify-center mt-8 gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <span className="text-primary/40">✦</span>
        <span className="text-primary/60">✦</span>
        <span className="text-primary/40">✦</span>
      </motion.div>
    </motion.div>
  );
};
