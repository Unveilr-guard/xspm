import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** how far it travels before settling (px) */
  distance?: number;
  once?: boolean;
  as?: React.ElementType;
}

const offset = (dir: Direction, d: number) => {
  switch (dir) {
    case 'up': return { y: d };
    case 'down': return { y: -d };
    case 'left': return { x: d };
    case 'right': return { x: -d };
    default: return {};
  }
};

/**
 * Scroll-triggered reveal with spring-eased entrance.
 * Respects prefers-reduced-motion.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 28,
  once = true,
  as,
}) => {
  const reduce = useReducedMotion();
  // Memoize so motion() isn't called every render — a fresh component identity
  // each render would remount children and steal focus from form inputs.
  const MotionTag = React.useMemo(() => motion(as || 'div'), [as]);

  if (reduce) {
    const Tag = (as || 'div') as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '0px 0px -80px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
};

/** Container that staggers its <Reveal>-like children. */
export const StaggerGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}> = ({ children, className, stagger = 0.1, once = true }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
}> = ({ children, className, distance = 28 }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const item: Variants = {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
};

export default Reveal;
