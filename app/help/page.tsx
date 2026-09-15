import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Do I need an account to browse courses?",
    answer: "No. The public landing page and course catalog can be explored without logging in.",
  },
  {
    question: "Why am I asked to log in for My Learning?",
    answer: "My Learning, Profile and Live Learning contain account-specific information, so authentication is required.",
  },
  {
    question: "How do I create an account?",
    answer: "Select Log in in the header and use the Create an account option on the login page.",
  },
  {
    question: "What if I have an account but cannot sign in?",
    answer: "Verify your email and password and contact support if you still cannot access the account.",
  },
];

export default function HelpPage() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <p className="legal-kicker">HELP CENTER</p>
        <h1>How can we help?</h1>
        <p className="legal-intro">
          Quick answers for account access, learning features and course browsing.
        </p>
        <div className="help-faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="help-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <Link href="/contact" className="contact-courses-link">
          Contact support
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
