"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Play,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { MouseEvent, useRef } from "react";

const learningItems = [
  "Learn with structure",
  "Practice with real projects",
  "Track your progress",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 18 });

  const orbX = useTransform(smoothX, [-500, 500], [-28, 28]);
  const orbY = useTransform(smoothY, [-400, 400], [-20, 20]);
  const visualX = useTransform(smoothX, [-500, 500], [-10, 10]);
  const visualY = useTransform(smoothY, [-400, 400], [-8, 8]);

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="hero relative isolate overflow-hidden"
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="hero-glow hero-glow-two"
        aria-hidden="true"
      />
      <div className="hero-noise" aria-hidden="true" />

      <div className="container relative z-10 grid items-center gap-12 py-16 md:py-24 lg:min-h-[720px] lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_40px_rgba(56,189,248,0.12)] backdrop-blur-md"
          >
            <Sparkles size={16} className="text-sky-500" />
            Built for the next generation
            <span className="hero-live-dot" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title mt-7 max-w-5xl text-5xl font-black tracking-[-0.045em] md:text-7xl lg:text-[86px]"
          >
            Learn skills that
            <span className="hero-title-gradient"> move you forward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            Practical, project-driven courses designed to help you learn faster,
            build real things and become career-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="/courses"
              whileHover={{ y: -3, scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="hero-primary-button group inline-flex items-center gap-2 rounded-full px-6 py-4 font-bold text-white"
            >
              Explore Courses
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#why"
              whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,.96)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-4 font-bold text-slate-800 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-sky-600">
                <Play size={13} fill="currentColor" />
              </span>
              Why InnoSutra?
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600"
          >
            {["Hands-on projects", "Expert-led", "Certificates"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.08 }}
                className="inline-flex items-center gap-2"
              >
                <CheckCircle2 size={17} className="text-sky-500" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ x: visualX, y: visualY }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hero-visual relative mx-auto w-full max-w-[620px]"
        >
          <div className="hero-visual-aura" aria-hidden="true" />

          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 0.7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-dashboard"
          >
            <div className="hero-dashboard-top">
              <div>
                <span className="text-xs font-bold text-slate-400">YOUR LEARNING SPACE</span>
                <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
                  Build your next big skill.
                </h2>
              </div>
              <span className="hero-live-badge">LIVE</span>
            </div>

            <div className="hero-dashboard-main">
              <motion.div
                animate={{ rotate: [-4, 4, -4], y: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="hero-rocket"
              >
                🚀
              </motion.div>

              <div className="hero-progress-wrap">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Learning momentum</span>
                  <span className="text-sky-600">78%</span>
                </div>
                <div className="hero-progress-track">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.3, delay: 0.75, ease: "easeOut" }}
                    className="hero-progress-bar"
                  />
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {learningItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.015 }}
                  className="hero-learning-row"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-sky-500">
                    <CheckCircle2 size={18} />
                  </span>
                  <span className="font-bold text-slate-800">{item}</span>
                  <ArrowRight size={15} className="ml-auto text-slate-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06, rotate: -2 }}
            className="hero-float-card hero-card-project"
          >
            <span className="hero-card-icon bg-violet-100 text-violet-600">
              <Code2 size={19} />
            </span>
            <span>
              <strong>Build Projects</strong>
              <small>Not just theory</small>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            whileHover={{ scale: 1.06, rotate: 2 }}
            className="hero-float-card hero-card-cert"
          >
            <span className="hero-card-icon bg-cyan-100 text-cyan-600">
              <Award size={19} />
            </span>
            <span>
              <strong>Get Certified</strong>
              <small>Show your skills</small>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -7, 0], x: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            whileHover={{ scale: 1.06 }}
            className="hero-float-card hero-card-career"
          >
            <span className="hero-card-icon bg-emerald-100 text-emerald-600">
              <TrendingUp size={19} />
            </span>
            <span>
              <strong>Grow Your Career</strong>
              <small>Skills that compound</small>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="hero-rating-card"
          >
            <span className="hero-rating-stars">★★★★★</span>
            <span><strong>4.9</strong> learner rating</span>
          </motion.div>

          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
