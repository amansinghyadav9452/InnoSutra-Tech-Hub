import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const learningItems = [
  "Learn with structure",
  "Practice with real projects",
  "Track your progress",
];

export default function Hero() {
  return (
    <section className="hero relative isolate overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container relative z-10 grid items-center gap-12 py-16 md:py-24 lg:min-h-[720px] lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="max-w-3xl">
          <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/90 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_40px_rgba(56,189,248,0.12)]">
            <Sparkles size={16} className="text-sky-500" />
            Built for the next generation
            <span className="hero-live-dot" />
          </div>

          <h1 className="hero-enter hero-enter-2 hero-title mt-7 max-w-5xl text-5xl font-black tracking-[-0.045em] md:text-7xl lg:text-[86px]">
            Learn skills that
            <span className="hero-title-gradient"> move you forward.</span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Practical, project-driven courses designed to help you learn faster,
            build real things and become career-ready.
          </p>

          <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-3">
            <a
              href="/courses"
              className="hero-primary-button group inline-flex items-center gap-2 rounded-full px-6 py-4 font-bold text-white"
            >
              Explore Courses
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#why"
              className="hero-secondary-button inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/85 px-6 py-4 font-bold text-slate-800 shadow-sm"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-sky-600">
                <Play size={13} fill="currentColor" />
              </span>
              Why InnoSutra?
            </a>
          </div>

          <div className="hero-enter hero-enter-5 mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            {["Hands-on projects", "Expert-led", "Certificates"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-sky-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual hero-enter hero-enter-visual relative mx-auto w-full max-w-[620px]">
          <div className="hero-visual-aura" aria-hidden="true" />

          <div className="hero-dashboard hero-float-main">
            <div className="hero-dashboard-top">
              <div>
                <span className="text-xs font-bold text-slate-400">
                  YOUR LEARNING SPACE
                </span>
                <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
                  Build your next big skill.
                </h2>
              </div>
              <span className="hero-live-badge">LIVE</span>
            </div>

            <div className="hero-dashboard-main">
              <div className="hero-rocket" aria-hidden="true">
                🚀
              </div>

              <div className="hero-progress-wrap">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Learning momentum</span>
                  <span className="text-sky-600">78%</span>
                </div>
                <div className="hero-progress-track">
                  <div className="hero-progress-bar" />
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {learningItems.map((item, index) => (
                <div
                  key={item}
                  className="hero-learning-row hero-row-enter"
                  style={{ animationDelay: `${0.42 + index * 0.08}s` }}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-sky-500">
                    <CheckCircle2 size={18} />
                  </span>
                  <span className="font-bold text-slate-800">{item}</span>
                  <ArrowRight size={15} className="ml-auto text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="hero-float-card hero-card-project hero-float-project">
            <span className="hero-card-icon bg-violet-100 text-violet-600">
              <Code2 size={19} />
            </span>
            <span>
              <strong>Build Projects</strong>
              <small>Not just theory</small>
            </span>
          </div>

          <div className="hero-float-card hero-card-cert hero-float-cert">
            <span className="hero-card-icon bg-cyan-100 text-cyan-600">
              <Award size={19} />
            </span>
            <span>
              <strong>Get Certified</strong>
              <small>Show your skills</small>
            </span>
          </div>

          <div className="hero-float-card hero-card-career hero-float-career">
            <span className="hero-card-icon bg-emerald-100 text-emerald-600">
              <TrendingUp size={19} />
            </span>
            <span>
              <strong>Grow Your Career</strong>
              <small>Skills that compound</small>
            </span>
          </div>

          <div className="hero-rating-card hero-rating-float">
            <span className="hero-rating-stars">★★★★★</span>
            <span>
              <strong>4.9</strong> learner rating
            </span>
          </div>

          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
