"use client";

import { motion, useReducedMotion } from "framer-motion";
import CourseGridSkeleton from "@/components/bento/CourseGridSkeleton";

export default function Loading() {
  const shouldReduceMotion = useReducedMotion();
  const skeletonPulse = {
    opacity: shouldReduceMotion ? 1 : [0.5, 1, 0.5],
    transition: {
      duration: shouldReduceMotion ? 0 : 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="flex-1 flex flex-col h-full w-full">
      {/* Top Bar Skeleton */}
      <header className="h-16 border-b border-learnos-border px-6 flex items-center justify-between shrink-0 sticky top-0 bg-learnos-background/80 backdrop-blur z-30">
        <motion.div animate={skeletonPulse} className="h-6 w-24 bg-learnos-surface rounded" />
        <motion.div animate={skeletonPulse} className="w-10 h-10 rounded-full bg-learnos-surface" />
      </header>

      <div className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-12 auto-rows-auto gap-4">
          {/* Hero Skeleton */}
          <motion.div
            animate={skeletonPulse}
            className="col-span-12 md:col-span-8 h-[240px] rounded-2xl bg-learnos-surface border border-learnos-border"
          />
          {/* Activity Skeleton */}
          <motion.div
            animate={skeletonPulse}
            className="col-span-12 md:col-span-4 h-[240px] rounded-2xl bg-learnos-surface border border-learnos-border"
          />

          {/* Stats Skeletons */}
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              animate={skeletonPulse}
              className="col-span-12 md:col-span-6 lg:col-span-4 h-[160px] rounded-2xl bg-learnos-surface border border-learnos-border"
            />
          ))}

          {/* Courses Skeletons */}
          <CourseGridSkeleton />
        </div>
      </div>
    </div>
  );
}
