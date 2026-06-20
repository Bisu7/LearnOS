"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useBentoVariants } from "./BentoGrid";
import { cn } from "@/lib/utils";
import React from "react";
import { BookOpen, TrendingUp, Flame } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  TrendingUp,
  Flame,
};

interface StatsTileProps {
  iconName: string;
  value: string;
  label: string;
}

export default function StatsTile({ iconName, value, label }: StatsTileProps) {
  const { bentoItemVariant } = useBentoVariants();
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[iconName] || BookOpen;

  return (
    <motion.article
      variants={bentoItemVariant}
      whileHover={shouldReduceMotion ? {} : { scale: 1.015, borderColor: "#7c6af7" }}
      className={cn(
        "col-span-12 md:col-span-6 lg:col-span-4",
        "relative rounded-2xl border border-learnos-border bg-learnos-surface p-6",
        "flex flex-col justify-between min-h-[160px]"
      )}
    >
      <div className="w-10 h-10 rounded-full bg-learnos-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-learnos-accent" />
      </div>

      <div>
        <div className="text-3xl font-bold text-learnos-text mb-1">{value}</div>
        <div className="text-sm text-learnos-subtext">{label}</div>
      </div>
    </motion.article>
  );
}
