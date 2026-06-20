"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart2,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type SidebarItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

export const navItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "progress", label: "Progress", icon: BarChart2 },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "settings", icon: Settings, label: "Settings" },
];


export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    // Set initial state based on window size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avoid SSR hydration mismatch by rendering a generic sidebar skeleton before mount
  if (!mounted) {
    return (
      <div className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-16 lg:w-56 bg-learnos-surface border-r border-learnos-border z-40" />
    );
  }

  return (
    <motion.nav
      initial={false}
      animate={{ width: isCollapsed ? 64 : 224 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ willChange: "width" }}
      className="hidden md:flex flex-col h-screen sticky top-0 left-0 bg-learnos-surface border-r border-learnos-border z-40 overflow-hidden shrink-0"
    >
      {/* Header / Logo */}
      <div className="h-16 flex items-center justify-center border-b border-learnos-border shrink-0 px-4">
        <div className="w-8 h-8 rounded-lg bg-learnos-accent/20 flex items-center justify-center shrink-0">
          <div className="w-4 h-4 rounded-full bg-learnos-accent" />
        </div>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-3 font-bold text-learnos-text whitespace-nowrap"
          >
            LearnOS
          </motion.span>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 flex flex-col gap-2 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={cn(
                "relative flex items-center h-10 px-2 rounded-lg group transition-colors",
                "focus-visible:ring-2 focus-visible:ring-learnos-accent focus-visible:outline-none",
                isActive
                  ? "text-learnos-text"
                  : "text-learnos-subtext hover:text-learnos-text hover:bg-learnos-muted/20"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-learnos-accent/10 rounded-lg border border-learnos-accent/20"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative flex items-center justify-center w-6 h-6 shrink-0">
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
              {!isCollapsed && (
                <span className="relative ml-3 whitespace-nowrap text-sm font-medium">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Collapse Toggle Button */}
      <div className="p-2 border-t border-learnos-border shrink-0">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center w-full h-10 rounded-lg text-learnos-subtext hover:text-learnos-text hover:bg-learnos-muted/30 transition-colors group focus-visible:ring-2 focus-visible:ring-learnos-accent focus-visible:outline-none"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </motion.nav>
  );
}
