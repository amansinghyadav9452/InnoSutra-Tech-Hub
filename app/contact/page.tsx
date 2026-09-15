import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="legal-page">
      <div className="container contact-page-grid">
        <section className="contact-hero">
          <p className="legal-kicker">SUPPORT</p>
          <h1>Need help with your learning account?</h1>
          <p>
            Contact the InnoSutra support team for account, course-access and learning-platform questions.
          </p>
        </section>

        <section className="contact-cards">
          <a href="mailto:support@innosutra.in" className="contact-card">
            <span className="contact-card-icon">
              <Mail size={22} />
            </span>
            <h2>Email support</h2>
            <p>support@innosutra.in</p>
            <span className="contact-card-link">
              Send an email
              <ArrowRight size={16} />
            </span>
          </a>

          <a href="mailto:help@innosutra.in" className="contact-card">
            <span className="contact-card-icon">
              <MessageCircle size={22} />
            </span>
            <h2>Help desk</h2>
            <p>help@innosutra.in</p>
            <span className="contact-card-link">
              Get help
              <ArrowRight size={16} />
            </span>
          </a>
        </section>

        <section className="contact-faq">
          <h2>Common questions</h2>
          <div>
            <h3>Can&apos;t log in?</h3>
            <p>Check your email and password, then contact support if the problem continues.</p>
          </div>
          <div>
            <h3>Course access problem?</h3>
            <p>Include your account email and course name so the team can verify access quickly.</p>
          </div>
          <Link href="/courses" className="contact-courses-link">
            Browse courses
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
