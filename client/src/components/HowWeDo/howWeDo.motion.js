export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 16px 32px rgba(212, 175, 55, 0.25)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};
