"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";

export const useBentoVariants = () => {
  const shouldReduceMotion = useReducedMotion();

  const bentoItemVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 260, damping: 22 }
    },
  };

  const containerVariant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };

  return { bentoItemVariant, containerVariant };
};

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  const { containerVariant } = useBentoVariants();

  return (
    <motion.main
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-12 auto-rows-auto gap-4"
    >
      {children}
    </motion.main>
  );
}
