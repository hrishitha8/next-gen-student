import { createClient } from "@/lib/supabase/server";
import Sidebar from "@/components/sidebar/Sidebar";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";

export default async function Home() {
  const supabase = await createClient();

  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <div className="min-h-screen gradient-bg text-white flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="mb-6">
          <p className="text-zinc-400 text-sm">
            Your learning dashboard
          </p>

          <h1 className="text-4xl font-bold mt-1">
            Welcome back, Boddu Hrishitha 👋
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          
          <section className="bg-[#15151d] rounded-3xl p-6 md:col-span-2 border border-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Learning Streak 🔥
                </h2>

                <p className="text-4xl font-bold">
                  12 Days
                </p>

                <p className="text-zinc-400 mt-2">
                  Keep learning daily to maintain streak
                </p>
              </div>

              <div className="text-5xl">
                🚀
              </div>
            </div>
          </section>

          
          <section className="bg-[#15151d] rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-xl font-semibold">
              Courses
            </h2>

            <p className="text-3xl font-bold">
              {courses?.length || 0}
            </p>
          </section>

          
          <ActivityTile />

          
          {courses?.map((course, index) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}