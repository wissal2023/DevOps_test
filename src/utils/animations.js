// src/utils/animations.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const staggerChildrenFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const glassPop = {
  hidden: { opacity: 0, y: 10, scale: 0.98, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const buttonReveal = {
  hidden: { opacity: 0, y: 12 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  }
};

export const cardReveal = {
  hidden: { opacity: 0, y: 18, rotateX: 4 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const overlayReveal = {
  hidden: { opacity: 0, y: 24, rotateX: 6 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const countReveal = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};