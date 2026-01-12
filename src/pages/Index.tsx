import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StartScreen } from "@/components/StartScreen";
import { BirthdayScreen } from "@/components/BirthdayScreen";

const Index = () => {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="min-h-screen bg-romantic">
      <AnimatePresence mode="wait">
        {!started ? (
          <StartScreen key="start" onStart={handleStart} />
        ) : (
          <BirthdayScreen key="birthday" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
