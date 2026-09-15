export default function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-violet-100 to-cyan-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-soft">
        <a href="/" className="text-xl font-black">
          Inno<span className="gradient-text">Sutra</span>
        </a>

        <h1 className="mt-10 text-3xl font-black">Welcome back</h1>
        <p className="mt-2 text-slate-500">Continue your learning journey.</p>

        <input
          className="mt-8 w-full rounded-xl border p-4"
          placeholder="Email address"
          type="email"
        />
        <input
          className="mt-3 w-full rounded-xl border p-4"
          placeholder="Password"
          type="password"
        />

        <button className="mt-5 w-full rounded-xl bg-slate-950 p-4 font-bold text-white">
          Login
        </button>

        <p className="mt-6 text-center text-sm">
          New here?{" "}
          <a href="/register" className="font-bold text-violet-600">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}
