const fields = [
  { label: "Full name", type: "text" },
  { label: "Email address", type: "email" },
  { label: "Password", type: "password" },
];

export default function Register() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-violet-100 to-cyan-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-soft">
        <a href="/" className="text-xl font-black">
          Inno<span className="gradient-text">Sutra</span>
        </a>

        <h1 className="mt-10 text-3xl font-black">Create your account</h1>
        <p className="mt-2 text-slate-500">Start learning for free.</p>

        {fields.map((field) => (
          <input
            key={field.label}
            className="mt-3 w-full rounded-xl border p-4"
            placeholder={field.label}
            type={field.type}
          />
        ))}

        <button className="mt-5 w-full rounded-xl bg-slate-950 p-4 font-bold text-white">
          Create Account
        </button>

        <p className="mt-6 text-center text-sm">
          Already registered?{" "}
          <a href="/login" className="font-bold text-violet-600">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
