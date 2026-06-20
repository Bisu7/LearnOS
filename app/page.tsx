import { Suspense } from "react";
import BentoGrid from "@/components/bento/BentoGrid";
import HeroTile from "@/components/bento/HeroTile";
import ActivityTile from "@/components/bento/ActivityTile";
import StatsTile from "@/components/bento/StatsTile";
import CourseGrid from "@/components/bento/CourseGrid";
import CourseGridSkeleton from "@/components/bento/CourseGridSkeleton";
import { BookOpen, TrendingUp, Flame } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col h-full w-full">
      {/* Top Bar */}
      <header className="h-16 border-b border-learnos-border px-6 flex items-center justify-between shrink-0 sticky top-0 bg-learnos-background/80 backdrop-blur z-30">
        <div className="font-display font-bold text-xl text-learnos-text tracking-tight">LearnOS</div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-learnos-accent to-learnos-glow flex items-center justify-center text-sm font-bold text-white shadow-lg">
          AK
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-4 md:p-6">
        <BentoGrid>
          <HeroTile />
          <ActivityTile />

          <StatsTile iconName="BookOpen" value="4" label="Active Courses" />
          <StatsTile iconName="TrendingUp" value="68%" label="Avg Progress" />
          <StatsTile iconName="Flame" value="12" label="Day Streak" />

          <Suspense fallback={<CourseGridSkeleton />}>
            <CourseGrid />
          </Suspense>
        </BentoGrid>
      </div>
    </div>
  );
}
