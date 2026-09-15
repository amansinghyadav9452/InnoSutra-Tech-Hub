import { CheckCircle2, Clock, PlayCircle, Star } from "lucide-react";
import { courses } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.id === slug) ?? courses[0];

  const curriculum = [
    "Introduction & Setup",
    "Core Fundamentals",
    "Hands-on Development",
    "Advanced Concepts",
    "Capstone Project",
  ];

  const learningOutcomes = [
    "Build practical projects",
    "Understand core concepts",
    "Work with real-world tools",
    "Create a portfolio project",
    "Debug and solve problems",
    "Prepare for interviews",
  ];

  return (
    <>
      <main className="py-8 md:py-14">
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700">
              {course.category}
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {course.title}
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              Master practical concepts through guided lessons, hands-on
              projects and a clear learning roadmap.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <b className="flex items-center gap-1 text-amber-600">
                <Star size={18} fill="currentColor" />
                {course.rating}
              </b>
              <span>{course.students} students</span>
              <span>{course.level}</span>
              <span className="flex items-center gap-1">
                <Clock size={17} />
                {course.hours}
              </span>
            </div>

            <section className="mt-12">
              <h2 className="text-3xl font-black">What you&apos;ll learn</h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {learningOutcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3">
                    <CheckCircle2 className="shrink-0 text-violet-500" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-black">Course curriculum</h2>

              <div className="mt-5 space-y-3">
                {curriculum.map((module, index) => (
                  <div
                    key={module}
                    className="flex justify-between rounded-2xl border bg-white p-5"
                  >
                    <span className="font-bold">
                      {String(index + 1).padStart(2, "0")} · {module}
                    </span>
                    <PlayCircle className="text-slate-400" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-3xl border bg-white p-5 shadow-soft lg:sticky lg:top-24">
            <div className="flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-200 via-cyan-100 to-mint text-7xl">
              {course.icon}
            </div>

            <div className="mt-6 flex items-end gap-2">
              <strong className="text-3xl">{course.price}</strong>
              <del className="text-slate-400">{course.old}</del>
            </div>

            <button className="mt-5 w-full rounded-2xl bg-slate-950 py-4 font-bold text-white">
              Buy Now
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              30-day access • Certificate included
            </p>
          </aside>
        </div>
      </main>
    </>
  );
}
