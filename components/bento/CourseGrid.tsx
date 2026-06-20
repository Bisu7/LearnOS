import { createClient } from "@/lib/supabase/server";
import CourseCard from "./CourseCard";

export default async function CourseGrid() {
  const supabase = await createClient();
  
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !courses) {
    return (
      <article className="col-span-12 rounded-2xl border border-learnos-border bg-[#111118] p-6 text-learnos-subtext flex items-center justify-center min-h-[160px]">
        Could not load courses. Check your Supabase connection.
      </article>
    );
  }

  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}
