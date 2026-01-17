import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const audio = new Audio("/tadum.mp3");
    audio.volume = 0.6;

    const playSound = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", playSound);
      document.removeEventListener("keydown", playSound);
    };

    // Try autoplay
    audio.play().catch(() => {
      // Wait for user interaction
      document.addEventListener("click", playSound);
      document.addEventListener("keydown", playSound);
    });

    return () => {
      document.removeEventListener("click", playSound);
      document.removeEventListener("keydown", playSound);
    };
  }, []);

  return (
    <motion.div className="intro">
      <motion.h1
        className="logo intro-logo"
        layoutId="logo"
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setTimeout(onFinish, 800)}
      >
        <span className="flix1">Movies</span>
        <span className="flix1">Flix</span>
      </motion.h1>
    </motion.div>
  );
}
