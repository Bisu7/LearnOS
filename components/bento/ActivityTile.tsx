"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useBentoVariants } from "./BentoGrid";
import { cn } from "@/lib/utils";

// 7x5 grid = 35 values. 0=empty, 1=30% accent, 2=60% accent, 3=100% accent
const fixedActivityData = [
  0, 1, 0, 0, 2, 3, 1,
  1, 2, 1, 0, 1, 2, 0,
  0, 3, 2, 1, 0, 1, 2,
  2, 1, 0, 3, 2, 1, 0,
  1, 0, 1, 2, 3, 2, 1,
];

export default function ActivityTile() {
  const { bentoItemVariant } = useBentoVariants();

  return (
    <motion.article
      variants={bentoItemVariant}
      whileHover={{ scale: 1.015, borderColor: "#7c6af7" }}
      className={cn(
        "col-span-12 md:col-span-4",
        "relative rounded-2xl border border-learnos-border bg-learnos-surface p-6",
        "flex flex-col justify-between min-h-[240px]"
      )}
    >
      <div className="flex items-center gap-2 text-learnos-text mb-6">
        <Zap className="w-5 h-5 text-learnos-accent" />
        <h2 className="font-semibold">Weekly Activity</h2>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-7 gap-2">
          {fixedActivityData.map((val, idx) => {
            let bgColorClass = "bg-learnos-border";
            if (val === 1) bgColorClass = "bg-learnos-accent/30";
            if (val === 2) bgColorClass = "bg-learnos-accent/60";
            if (val === 3) bgColorClass = "bg-learnos-accent";

            return (
              <div
                key={idx}
                className={cn(
                  "w-3 h-3 rounded-sm transition-colors duration-300 hover:bg-learnos-glow hover:shadow-[0_0_8px_rgba(167,139,250,0.8)]",
                  bgColorClass
                )}
              />
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
