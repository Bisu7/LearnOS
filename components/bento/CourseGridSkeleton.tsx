"use client";

import { motion, TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CourseGridSkeleton() {
  const skeletonPulse: TargetAndTransition = {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.6,
      repeat: Infinity,
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
            "rounded-2xl border border-[#1e1e2e] bg-[#111118] p-6 flex flex-col justify-between min-h-[160px]"
          )}
        >
          <div className="mb-4">
            <motion.div
              animate={skeletonPulse}
              className="w-10 h-10 rounded-xl bg-[#1e1e2e]"
            />
          </div>

          <div className="mt-auto">
            <motion.div
              animate={skeletonPulse}
              className="h-4 w-3/4 rounded bg-[#1e1e2e] mb-4"
            />
            
            <div className="flex justify-between mb-1.5">
              <motion.div
                animate={skeletonPulse}
                className="h-3 w-16 rounded bg-[#1e1e2e]"
              />
            </div>
            
            <motion.div
              animate={skeletonPulse}
              className="w-full h-1.5 rounded-full bg-[#1e1e2e]"
            />
          </div>
        </article>
      ))}
    </>
  );
}
