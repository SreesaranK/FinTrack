import { Link } from "react-router-dom";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 flex items-center justify-center px-4 py-10">

      {/* Background Blur Effects */}
      <div className="absolute -top-52 -left-40 w-[450px] h-[450px] rounded-full bg-emerald-300 opacity-40 blur-[150px]" />

      <div className="absolute -bottom-40 -right-32 w-[380px] h-[380px] rounded-full bg-teal-300 opacity-40 blur-[130px]" />

      <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] rounded-full bg-white opacity-60 blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg">

        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">

          <Link
            to="/"
            className="inline-flex items-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-3xl font-bold text-white shadow-xl">
              ₹
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-5xl font-black tracking-tight text-transparent">
                FinTrack
              </h1>

              <p className="mt-1 text-sm tracking-wide text-slate-500">
                PERSONAL FINANCE DASHBOARD
              </p>
            </div>
          </Link>

        </div>

        {/* Authentication Card */}
        <div className="rounded-[36px] border border-white/60 bg-white/75 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(16,185,129,0.18)]">

          {/* Heading */}
          <div className="mb-8 text-center">

            <h2 className="text-4xl font-bold text-slate-800">
              {title}
            </h2>

            <p className="mt-3 text-slate-500">
              {subtitle}
            </p>

          </div>

          {/* Login / Register Form */}
          {children}

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} FinTrack. All rights reserved.
        </div>

      </div>
    </div>
  );
}