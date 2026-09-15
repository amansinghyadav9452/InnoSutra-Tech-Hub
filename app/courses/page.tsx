"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const filters = [
  "All",
  "Programming",
  "AI & Data",
  "Web Development",
  "Cybersecurity",
  "Cloud & DevOps",
];

export default function Courses() {
  return (
    <>
      <main className="py-10 md:py-16">
        <div className="container">
          <div>
            <p className="font-bold text-violet-600">COURSE LIBRARY</p>
            <h1 className="mt-2 text-4xl font-black md:text-6xl">
              Learn something useful.
            </h1>
            <p className="mt-4 text-slate-600">
              Explore practical courses built for ambitious students.
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-2xl border bg-white px-4 py-4">
              <Search size={18} />
              <span className="text-slate-400">Search courses...</span>
            </div>
            <button
              className="rounded-2xl border bg-white px-4"
              aria-label="Open filters"
            >
              <SlidersHorizontal />
            </button>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                className="whitespace-nowrap rounded-full border bg-white px-4 py-2 text-sm font-bold"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
