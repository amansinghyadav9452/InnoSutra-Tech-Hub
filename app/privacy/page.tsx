export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <p className="legal-kicker">LEGAL</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: September 15, 2026</p>
        <section>
          <h2>Information we collect</h2>
          <p>
            When you create an InnoSutra account, we collect information such as your name and email address, along with account activity needed to provide the learning service.
          </p>
        </section>
        <section>
          <h2>How we use information</h2>
          <p>
            We use account information to authenticate users, provide course access, maintain learning progress and communicate important service updates.
          </p>
        </section>
        <section>
          <h2>Security</h2>
          <p>
            Passwords are stored using one-way password hashing and sessions use HTTP-only cookies. We limit account data to what is needed to operate the service.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact support@innosutra.in.
          </p>
        </section>
      </div>
    </main>
  );
}
