import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/AuthForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;
  const nextPath = params.next?.startsWith("/") && !params.next.startsWith("//")
    ? params.next
    : "/dashboard";
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <Link href="/" className="auth-back-link">
          <ArrowLeft size={16} />
          Back to InnoSutra
        </Link>

        <div className="auth-card">
          <Link href="/" className="brand auth-brand">
            <span>Inno</span>
            <span className="brand-gradient">Sutra</span>
          </Link>

          <div className="auth-heading">
            <span className="auth-kicker">WELCOME BACK</span>
            <h1>Continue your learning journey.</h1>
            <p>
              Log in to access your courses, profile and live learning space.
            </p>
          </div>

          <LoginForm nextPath={nextPath} />

          <div className="auth-security-note">
            <ShieldCheck size={18} />
            Your session is protected with a secure HTTP-only cookie.
          </div>

          <p className="auth-switch">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="auth-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
