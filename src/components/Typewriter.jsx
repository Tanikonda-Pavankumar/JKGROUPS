import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 0 }) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay / 1000,
          },
        },
        hidden: {},
      }}
      style={{ display: 'inline-block' }}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Typewriter;
