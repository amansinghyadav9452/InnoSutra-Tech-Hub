"use client";

import { ArrowUpRight, Clock, Star, Users } from "lucide-react";

type Course = {
  id: string;
  title: string;
  category: string;
  rating: number;
  students: string;
  hours: string;
  price: string;
  old: string;
  level: string;
  icon: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <a
      href={`/courses/${course.id}`}
      className="group block overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft"
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-violet-100 via-cyan-50 to-mint p-5">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/50" />
        <div className="text-6xl">{course.icon}</div>

        <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold">
          {course.category}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-slate-950 p-2 text-white">
          <ArrowUpRight size={15} />
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-extrabold leading-tight transition group-hover:text-violet-600">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Practical projects, guided lessons and career-ready skills.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1 font-bold text-amber-600">
            <Star size={14} fill="currentColor" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {course.students}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {course.hours}
          </span>
        </div>

        <div className="mt-5 flex items-end gap-2">
          <strong className="text-xl">{course.price}</strong>
          <del className="text-sm text-slate-400">{course.old}</del>
        </div>
      </div>
    </a>
  );
}
