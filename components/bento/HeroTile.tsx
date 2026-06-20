"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { bentoItemVariant } from "./BentoGrid";
import { cn } from "@/lib/utils";

export default function HeroTile() {
  return (
    <motion.article
      variants={bentoItemVariant}
      whileHover={{ scale: 1.015, borderColor: "#7c6af7" }}
      className={cn(
        "col-span-12 md:col-span-8",
        "relative overflow-hidden rounded-2xl border border-learnos-border bg-learnos-surface p-6",
        "flex flex-col justify-between min-h-[240px]"
      )}
    >
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(124,106,247,0.15),_transparent_50%)] pointer-events-none" />

      {/* Animated Shimmer */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"
        style={{ skewX: "-20deg" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />

      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-learnos-text mb-2">Good morning, Alex</h1>
        <p className="text-learnos-subtext">Ready to continue your learning journey?</p>
      </div>

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7c6af7] to-[#a78bfa] shadow-[0_0_15px_rgba(124,106,247,0.3)]">
          <Flame className="w-4 h-4 text-white fill-white" />
          <span className="text-sm font-bold text-white">12 day streak</span>
        </div>
      </div>
    </motion.article>
  );
}
