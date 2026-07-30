import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF } from "react-icons/fa";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login
    navigate("/dashboard");
  };

  return (
    <div className="space-y-7">
      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email Address
          </label>

          <div className="group flex items-center rounded-2xl border border-slate-300 bg-white px-4 transition-all duration-300 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
            <FiMail className="text-slate-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="group flex items-center rounded-2xl border border-slate-300 bg-white px-4 transition-all duration-300 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
            <FiLock className="text-slate-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-500 hover:text-emerald-600"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="accent-emerald-600" />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
          Sign In
        </button>
      </form>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-300"></div>

        <span className="text-xs uppercase tracking-wider text-slate-400">
          Or continue with
        </span>

        <div className="h-px flex-1 bg-slate-300"></div>
      </div>

      <div className="grid gap-3">
        <button className="flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white py-3.5 hover:bg-slate-50">
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <button className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900 py-3.5 text-white hover:bg-black">
          <FaGithub size={20} />
          Continue with GitHub
        </button>

        <button className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-3.5 text-white hover:bg-blue-700">
          <FaFacebookF size={18} />
          Continue with Facebook
        </button>
      </div>

      <div className="text-center text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-emerald-600"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}