import Link from "next/link";
import { ArrowRight, CalendarDays, Video } from "lucide-react";

const sessions = [
  {
    title: "Building Your First Production API",
    mentor: "Industry Mentor Session",
    time: "Today · 7:30 PM",
  },
  {
    title: "Cybersecurity Career Roadmap",
    mentor: "Live Career Workshop",
    time: "Tomorrow · 6:00 PM",
  },
  {
    title: "Portfolio Review: Web Development",
    mentor: "Project Review Room",
    time: "Friday · 5:30 PM",
  },
];

export default function LivePage() {
  return (
    <main className="py-10 md:py-16">
      <div className="container">
        <section className="rounded-[32px] bg-slate-950 p-7 text-white shadow-soft md:p-10">
          <div className="flex items-center gap-3 text-sm font-bold text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            LIVE LEARNING
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            Learn with people, not just playlists.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Join workshops, mentor sessions and practical project reviews built
            around real-world skills.
          </p>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-bold text-violet-600">UPCOMING</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Live sessions
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {sessions.map((session) => (
              <article
                key={session.title}
                className="rounded-3xl border bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-100 text-violet-600">
                    <Video size={20} />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                    Upcoming
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black">{session.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{session.mentor}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <CalendarDays size={16} />
                  {session.time}
                </p>
                <Link
                  href="/courses"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-600"
                >
                  View learning path
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
