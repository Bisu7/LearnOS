"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "./Sidebar";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-learnos-surface/90 backdrop-blur-md border-t border-learnos-border z-40 px-4 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={cn(
              "relative flex flex-col items-center justify-center w-12 h-12 rounded-full group transition-colors",
              "focus-visible:ring-2 focus-visible:ring-learnos-accent focus-visible:outline-none",
              isActive ? "text-learnos-accent" : "text-learnos-subtext hover:text-learnos-text"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-highlight"
                className="absolute inset-0 bg-learnos-accent/10 rounded-full border border-learnos-accent/20"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center">
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
