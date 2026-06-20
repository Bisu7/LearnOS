import { createClient } from "@/lib/supabase/server";
import CourseCard from "./CourseCard";
import { Course } from "@/types/database";

export default async function CourseGrid() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return (
      <article className="col-span-12 rounded-2xl border border-learnos-border bg-learnos-surface p-6 text-learnos-subtext flex flex-col items-center justify-center min-h-[160px] text-center">
        <p className="mb-2">Could not load courses. Check your Supabase connection.</p>
        <p className="text-xs">Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local</p>
      </article>
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error);
  }

  const courses = data as Course[] | null;

  if (error || !courses) {
    return (
      <article className="col-span-12 rounded-2xl border border-learnos-border bg-learnos-surface p-6 text-learnos-subtext flex items-center justify-center min-h-[160px]">
        Could not load courses. Check your Supabase connection.
      </article>
    );
  }

  return (
    <>
      {courses.map((course: Course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}
