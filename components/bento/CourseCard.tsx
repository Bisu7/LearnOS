"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Layers, Server, Code2, Database, BookOpen, Cpu, Globe, Lock
} from "lucide-react";
import { useBentoVariants } from "./BentoGrid";
import { Course } from "@/types/database";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Layers, Server, Code2, Database, BookOpen, Cpu, Globe, Lock
};

export default function CourseCard({ course }: { course: Course }) {
  const { bentoItemVariant } = useBentoVariants();
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[course.icon_name] || BookOpen;

  const getHue = (str: string) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum % 360;
  };

  const hue = getHue(course.icon_name);
  const glowStyle = {
    background: `radial-gradient(circle at top right, hsla(${hue}, 80%, 60%, 0.15), transparent 70%)`,
  };

  return (
    <motion.article
      variants={bentoItemVariant}
      whileHover={{ scale: 1.02, borderColor: "#7c6af7" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "col-span-12 sm:col-span-6 lg:col-span-4",
        "relative rounded-2xl border border-learnos-border bg-learnos-surface p-6 overflow-hidden flex flex-col justify-between min-h-[160px]"
      )}
    >
      <div className="absolute inset-0 pointer-events-none" style={glowStyle} />

      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-learnos-muted/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-learnos-text" />
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-sm font-semibold text-learnos-text truncate mb-3">
          {course.title}
        </h3>

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-learnos-subtext">{course.progress}% complete</span>
        </div>

        <div className="w-full h-1.5 bg-learnos-border rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#7c6af7] to-[#a78bfa]"
            initial={{ width: shouldReduceMotion ? `${course.progress}%` : "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: [0.34, 1.56, 0.64, 1], delay: shouldReduceMotion ? 0 : 0.2 }}
          />
        </div>
      </div>
    </motion.article>
  );
}
