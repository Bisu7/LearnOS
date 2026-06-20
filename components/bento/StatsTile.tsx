"use client";

import { motion } from "framer-motion";
import { bentoItemVariant } from "./BentoGrid";
import { cn } from "@/lib/utils";
import React from "react";

interface StatsTileProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

export default function StatsTile({ icon: Icon, value, label }: StatsTileProps) {
  return (
    <motion.article
      variants={bentoItemVariant}
      whileHover={{ scale: 1.015, borderColor: "#7c6af7" }}
      className={cn(
        "col-span-6 md:col-span-4",
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
