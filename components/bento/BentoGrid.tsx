"use client";

import { motion, Variants } from "framer-motion";

export const bentoItemVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 260, damping: 22 } 
  },
};

const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function BentoGrid({ children }: { children: React.ReactNode }) {
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
