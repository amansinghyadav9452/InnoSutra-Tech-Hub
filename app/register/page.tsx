import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { RegisterForm } from "@/components/AuthForm";

export default async function RegisterPage({
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
            <span className="auth-kicker">START LEARNING</span>
            <h1>Create your InnoSutra account.</h1>
            <p>
              Create your account once and keep your courses, progress and learning activity together.
            </p>
          </div>

          <RegisterForm nextPath={nextPath} />

          <div className="auth-security-note">
            <ShieldCheck size={18} />
            Passwords are stored as secure one-way hashes.
          </div>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link href="/login" className="auth-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
