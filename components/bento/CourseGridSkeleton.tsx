"use client";

import { motion, TargetAndTransition, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CourseGridSkeleton() {
  const shouldReduceMotion = useReducedMotion();

  const skeletonPulse: TargetAndTransition = {
    opacity: shouldReduceMotion ? 1 : [0.5, 1, 0.5],
    transition: {
      duration: shouldReduceMotion ? 0 : 1.6,
      repeat: shouldReduceMotion ? 0 : Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <article
          key={i}
          className={cn(
            "col-span-12 md:col-span-6 lg:col-span-4",
            "rounded-2xl border border-learnos-border bg-learnos-surface p-6 flex flex-col justify-between min-h-[160px]"
          )}
        >
          <div className="mb-4">
            <motion.div
              animate={skeletonPulse}
              className="w-10 h-10 rounded-xl bg-learnos-border"
            />
          </div>

          <div className="mt-auto">
            <motion.div
              animate={skeletonPulse}
              className="h-4 w-3/4 rounded bg-learnos-border mb-4"
            />

            <div className="flex justify-between mb-1.5">
              <motion.div
                animate={skeletonPulse}
                className="h-3 w-16 rounded bg-learnos-border"
              />
            </div>

            <motion.div
              animate={skeletonPulse}
              className="w-full h-1.5 rounded-full bg-learnos-border"
            />
          </div>
        </article>
      ))}
    </>
  );
}
