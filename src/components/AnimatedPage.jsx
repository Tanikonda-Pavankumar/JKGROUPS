import { motion } from 'framer-motion';
import QuickStats from './QuickStats';

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -8, filter: 'blur(4px)', scale: 0.99 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    style={{ minHeight: '80vh', transformOrigin: 'top center' }}
  >
    {children}
    <QuickStats />
  </motion.div>
);

export default AnimatedPage;
