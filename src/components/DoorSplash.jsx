import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DoorSplash = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open door faster
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 200);
    
    // Unmount splash much sooner
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  // Deep, rich solid heavy wood texture
  const woodTexture = 'linear-gradient(rgba(15,10,5,0.4), rgba(15,10,5,0.8)), url(https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1600&q=80)';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', perspective: '1500px',
      pointerEvents: isOpen ? 'none' : 'auto',
      backgroundColor: '#050301'
    }}>
      {/* Left Door */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? 105 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '50%', height: '100%',
          backgroundImage: woodTexture,
          backgroundSize: '200% 100%',
          backgroundPosition: 'left center',
          transformOrigin: 'left',
          boxShadow: isOpen ? 'none' : 'inset -5px 0 15px rgba(0,0,0,0.5), 10px 0 30px rgba(0,0,0,0.9)',
          borderRight: '2px solid #1a0f05',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          zIndex: 2, position: 'relative', overflow: 'hidden'
        }}
      >
        {/* Simple Heavy Door Panel */}
        <div style={{ position: 'absolute', inset: '60px 40px', border: '2px solid rgba(0,0,0,0.3)', borderRadius: '2px' }}></div>
        
        {/* Modern Heavy Door Handle (Left) */}
        <motion.div 
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ 
            width: '14px', height: '160px', 
            background: 'linear-gradient(to bottom, #d4af37, #aa8022)', 
            marginRight: '30px', 
            borderRadius: '4px', 
            boxShadow: '4px 0px 10px rgba(0,0,0,0.8)', 
            zIndex: 3 
          }} 
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? -105 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '50%', height: '100%',
          backgroundImage: woodTexture,
          backgroundSize: '200% 100%',
          backgroundPosition: 'right center',
          transformOrigin: 'right',
          boxShadow: isOpen ? 'none' : 'inset 10px 0 30px rgba(0,0,0,0.9)',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          zIndex: 2, position: 'relative', overflow: 'hidden'
        }}
      >
        {/* Simple Heavy Door Panel */}
        <div style={{ position: 'absolute', inset: '60px 40px', border: '2px solid rgba(0,0,0,0.3)', borderRadius: '2px' }}></div>

        {/* Modern Heavy Door Handle (Right) */}
        <motion.div 
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ 
            width: '14px', height: '160px', 
            background: 'linear-gradient(to bottom, #d4af37, #aa8022)', 
            marginLeft: '30px', 
            borderRadius: '4px', 
            boxShadow: '-4px 0px 10px rgba(0,0,0,0.8)', 
            zIndex: 3 
          }} 
        />
      </motion.div>
      
      {/* Glow reveal behind the doors */}
      <motion.div
        initial={{ opacity: 1, scale: 0.8 }}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 1.2 : 0.8 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, rgba(5,3,1,1) 80%)', zIndex: 1
        }}
      />
    </div>
  );
};

export default DoorSplash;
