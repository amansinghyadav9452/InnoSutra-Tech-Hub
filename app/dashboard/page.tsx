import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle, Trophy } from "lucide-react";

const learningItems = [
  {
    title: "Complete Python Development",
    progress: 78,
    meta: "32 of 42 hours",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    progress: 42,
    meta: "13 of 31 hours",
  },
  {
    title: "Modern Full-Stack Web Development",
    progress: 18,
    meta: "9 of 48 hours",
  },
];

export default function DashboardPage() {
  return (
    <main className="py-10 md:py-16">
      <div className="container">
        <section className="rounded-[32px] bg-gradient-to-br from-violet-100 via-white to-cyan-100 p-7 shadow-soft md:p-10">
          <p className="text-sm font-black uppercase tracking-wider text-violet-600">
            My Learning
          </p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">
            Keep building your future.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Pick up where you left off and keep your learning momentum moving.
          </p>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <BookOpen className="text-violet-600" />
            <p className="mt-5 text-sm text-slate-500">Enrolled courses</p>
            <p className="mt-1 text-3xl font-black">8</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <PlayCircle className="text-cyan-600" />
            <p className="mt-5 text-sm text-slate-500">Learning hours</p>
            <p className="mt-1 text-3xl font-black">64.5</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <Trophy className="text-amber-500" />
            <p className="mt-5 text-sm text-slate-500">Certificates</p>
            <p className="mt-1 text-3xl font-black">3</p>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-bold text-violet-600">CONTINUE</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Your active courses
              </h2>
            </div>
            <Link
              href="/courses"
              className="hidden items-center gap-1 text-sm font-bold text-violet-600 sm:flex"
            >
              Explore courses
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-7 grid gap-4">
            {learningItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border bg-white p-5 shadow-soft md:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 text-2xl">
                    🎓
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-black">{item.title}</h3>
                      <span className="text-sm font-bold text-violet-600">
                        {item.progress}%
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                  <Link
                    href="/courses"
                    className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white"
                  >
                    Continue
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
