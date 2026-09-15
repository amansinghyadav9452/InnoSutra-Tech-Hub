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
  LogIn,
  LogOut,
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
    protected: false,
  },
  {
    label: "Course Catalog",
    href: "/courses",
    icon: BookOpen,
    protected: false,
  },
  {
    label: "My Learning",
    href: "/dashboard",
    icon: GraduationCap,
    protected: true,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
    protected: true,
  },
  {
    label: "Live Learning",
    href: "/live",
    icon: Video,
    protected: true,
  },
];

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: "student" | "admin";
};

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    let active = true;

    async function loadSession() {
      try {
        const response = await fetch("/api/auth/me", {
          cache: "no-store",
        });
        const data = await response.json();

        if (active) {
          setUser(data.user ?? null);
        }
      } catch {
        if (active) {
          setUser(null);
        }
      } finally {
        if (active) {
          setAuthLoading(false);
        }
      }
    }

    loadSession();

    return () => {
      active = false;
    };
  }, [pathname]);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } finally {
      setUser(null);
      setSidebarOpen(false);
      window.location.href = "/";
    }
  }

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
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="header-search-button"
              aria-label="Search courses"
            >
              <Search size={19} />
            </button>

            {!authLoading && user ? (
              <button
                type="button"
                className="header-user"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open account menu"
              >
                <span className="header-user-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span className="header-user-name">{user.name.split(" ")[0]}</span>
              </button>
            ) : (
              <Link href="/login" className="header-login">
                Log in
              </Link>
            )}

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
            {user ? (
              user.name.charAt(0).toUpperCase()
            ) : (
              <CircleUserRound size={24} />
            )}
          </div>
          <div>
            <p className="sidebar-profile-title">
              {user ? `Hi, ${user.name.split(" ")[0]}` : "Welcome to InnoSutra"}
            </p>
            <p className="sidebar-profile-subtitle">
              {user ? user.email : "Sign in to unlock your learning space"}
            </p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-label">LEARN</p>

          {sidebarLinks.map((item) => {
            const Icon = item.icon;
            const href = item.protected && !user
              ? `/login?next=${encodeURIComponent(item.href)}`
              : item.href;

            return (
              <Link
                key={item.label}
                href={href}
                className={`sidebar-link ${
                  pathname === item.href ? "is-active" : ""
                }`}
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
          <p className="sidebar-promo-title">
            {user ? "Keep your streak going" : "Ready to level up?"}
          </p>
          <p className="sidebar-promo-text">
            {user
              ? "Continue your courses and keep building practical skills."
              : "Create an account to save courses and track your progress."}
          </p>
          <Link
            href={user ? "/dashboard" : "/register"}
            className="sidebar-promo-button"
            onClick={() => setSidebarOpen(false)}
          >
            {user ? "My Learning" : "Create Account"}
          </Link>
        </div>

        <div className="sidebar-account-actions">
          {user ? (
            <button
              type="button"
              className="sidebar-account-button"
              onClick={handleLogout}
            >
              <LogOut size={17} />
              Log out
            </button>
          ) : (
            <Link
              href="/login"
              className="sidebar-account-button"
              onClick={() => setSidebarOpen(false)}
            >
              <LogIn size={17} />
              Log in
            </Link>
          )}
        </div>
      </aside>

      <div className="app-content">{children}</div>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          const isPrimary = index === 2;
          const href = item.protected && !user
            ? `/login?next=${encodeURIComponent(item.href)}`
            : item.href;

          return (
            <Link
              key={item.label}
              href={href}
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
