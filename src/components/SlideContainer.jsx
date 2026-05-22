
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const SlideContainer = ({ children, className = '', style = {} }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`glass-panel w-full slide-container ${className}`}
      style={{ ...style }}
    >
      {children}
    </motion.div>
  );
};

export default SlideContainer;
