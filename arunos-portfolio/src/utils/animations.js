// Animation utility constants and helpers

export const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };
export const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };
export const slideInLeft = { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.4 } };
export const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } };

export const getStaggerDelay = (index, baseDelay = 0.05) => ({
  animationDelay: `${index * baseDelay}s`,
});
