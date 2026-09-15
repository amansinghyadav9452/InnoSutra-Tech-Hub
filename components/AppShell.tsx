"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  CircleUserRound,
  GraduationCap,
  Home,
  Menu,
  Search,
  Sparkles,
  UserRound,
  Video,
  X,
} from "lucide-react";

const sidebarLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Course Catalog",
    href: "/courses",
    icon: BookOpen,
  },
  {
    label: "My Learning",
    href: "/dashboard",
    icon: GraduationCap,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
  {
    label: "Live Learning",
    href: "/live",
    icon: Video,
  },
];

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand" aria-label="InnoSutra home">
            <span>Inno</span>
            <span className="brand-gradient">Sutra</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/" className="desktop-nav-link">
              Home
            </Link>
            <Link href="/courses" className="desktop-nav-link">
              Courses
            </Link>
            <Link href="/courses" className="desktop-nav-link">
              For Business
            </Link>
            <Link href="/courses" className="desktop-nav-link">
              Community
            </Link>
            <Link href="/courses" className="desktop-nav-link">
              Pricing
            </Link>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="header-search-button"
              aria-label="Search courses"
            >
              <Search size={19} />
            </button>

            <Link href="/login" className="header-login">
              Log in
            </Link>

            <Link href="/register" className="header-join">
              Join Free
            </Link>

            <button
              type="button"
              className="menu-button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={sidebarOpen}
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`sidebar-backdrop ${sidebarOpen ? "is-visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`app-sidebar ${sidebarOpen ? "is-open" : ""}`}
        aria-label="Application navigation"
      >
        <div className="sidebar-header">
          <Link
            href="/"
            className="brand"
            onClick={() => setSidebarOpen(false)}
          >
            <span>Inno</span>
            <span className="brand-gradient">Sutra</span>
          </Link>

          <button
            type="button"
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <CircleUserRound size={24} />
          </div>
          <div>
            <p className="sidebar-profile-title">Welcome to InnoSutra</p>
            <p className="sidebar-profile-subtitle">Start your journey</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-label">LEARN</p>

          {sidebarLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-link-icon">
                  <Icon size={19} />
                </span>
                <span>{item.label}</span>
                <ChevronRight size={16} className="sidebar-chevron" />
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-promo">
          <div className="sidebar-promo-icon">
            <Sparkles size={19} />
          </div>
          <p className="sidebar-promo-title">Ready to level up?</p>
          <p className="sidebar-promo-text">
            Explore practical courses built for your next step.
          </p>
          <Link
            href="/courses"
            className="sidebar-promo-button"
            onClick={() => setSidebarOpen(false)}
          >
            Explore Courses
          </Link>
        </div>
      </aside>

      <div className="app-content">{children}</div>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          const isPrimary = index === 2;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`bottom-nav-item ${isPrimary ? "is-primary" : ""} ${
                pathname === item.href ? "is-active" : ""
              }`}
            >
              <span className="bottom-nav-icon">
                <Icon size={20} />
              </span>
              <span>{item.label === "Course Catalog" ? "Catalog" : item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
