import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient progress bar pinned to the top of the viewport. */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#00E5FF] via-[#2F6BFF] to-[#2F6BFF]"
    />
  );
};

export default ScrollProgress;
