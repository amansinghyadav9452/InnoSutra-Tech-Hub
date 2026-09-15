import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import { courses } from "@/data/courses";

const categories = [
  "AI & Machine Learning",
  "Web Development",
  "Cybersecurity",
  "Cloud & DevOps",
  "Data Science",
  "Programming",
];

const benefits = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Clear roadmaps instead of random tutorials.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Projects",
    description: "Build portfolio-worthy work while learning.",
  },
  {
    icon: Trophy,
    title: "Career Ready",
    description: "Skills, assessments and certificates that prove progress.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section id="categories" className="py-16">
          <div className="container">
            <p className="font-bold text-violet-600">EXPLORE</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              What do you want to learn?
            </h2>

            <div className="category-3d-grid mt-8">
              {categories.map((category, index) => (
                <a
                  key={category}
                  href="/courses"
                  className="category-3d-card"
                >
                  {["🤖", "💻", "🛡️", "☁️", "📊", "🐍"][index]} {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <p className="font-bold text-cyan-600">TRENDING NOW</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Skills students are learning
            </h2>

            <div className="course-grid-3d mt-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="py-20">
          <div className="container why-3d-panel rounded-[36px] border bg-white p-7 shadow-soft md:p-12">
            <div className="max-w-2xl">
              <p className="font-bold text-violet-600">WHY INNOSUTRA</p>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">
                Less passive watching. More building.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Everything is structured around practical learning so your
                course completion ends with something you can actually show.
              </p>
            </div>

            <div className="benefits-3d-grid mt-10">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="benefit-3d-card"
                >
                  <Icon className="text-violet-600" />
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container cta-3d-panel rounded-[36px] bg-gradient-to-br from-violet-100 via-white to-cyan-100 p-10 text-center md:p-20">
            <p className="font-bold text-violet-600">YOUR NEXT CHAPTER</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              Learn. Build. <span className="gradient-text">Become.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-600">
              Start with one skill. Build something real. Then keep going.
            </p>
            <a
              href="/courses"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white"
            >
              Browse all courses
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>
      </main>


    </>
  );
}
