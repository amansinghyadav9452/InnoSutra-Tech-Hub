import Link from "next/link";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" className="brand">
              <span>Inno</span>
              <span className="brand-gradient">Sutra</span>
            </Link>
            <p>
              Practical learning for students who want to learn, build and grow.
            </p>
            <div className="site-footer-trust">
              <ShieldCheck size={17} />
              Secure account and learning experience
            </div>
          </div>

          <div>
            <h3>Learn</h3>
            <Link href="/courses">Course Catalog</Link>
            <Link href="/dashboard">My Learning</Link>
            <Link href="/live">Live Learning</Link>
          </div>

          <div>
            <h3>Support</h3>
            <Link href="/help">Help Center</Link>
            <Link href="/contact">Contact Support</Link>
            <Link href="/contact">FAQ</Link>
          </div>

          <div>
            <h3>Legal</h3>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/refund">Refund & Cancellation</Link>
          </div>
        </div>

        <div className="site-footer-contact">
          <a href="mailto:support@innosutra.in">
            <Mail size={16} />
            support@innosutra.in
          </a>
          <a href="mailto:help@innosutra.in">
            <MessageCircle size={16} />
            Help & support
          </a>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 InnoSutra Tech Hub. All rights reserved.</span>
          <span>Learn. Build. Become.</span>
        </div>
      </div>
    </footer>
  );
}
