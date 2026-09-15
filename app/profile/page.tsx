import Link from "next/link";
import { ArrowRight, Award, Settings, UserRound } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="py-10 md:py-16">
      <div className="container max-w-5xl">
        <section className="rounded-[32px] bg-white p-7 shadow-soft md:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[28px] bg-gradient-to-br from-violet-100 to-cyan-100 text-violet-600">
              <UserRound size={40} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-violet-600">MY PROFILE</p>
              <h1 className="mt-1 text-3xl font-black md:text-4xl">
                Your InnoSutra profile
              </h1>
              <p className="mt-2 text-slate-500">
                Keep your learning identity and achievements in one place.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold">
              <Settings size={17} />
              Settings
            </button>
          </div>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <Award className="text-violet-600" />
            <h2 className="mt-5 text-xl font-black">Your achievements</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              3 certificates, 18 completed projects and a 12-day learning streak.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black">Keep learning</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore new skills and add another practical course to your path.
            </p>
            <Link
              href="/courses"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            >
              Browse courses
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
