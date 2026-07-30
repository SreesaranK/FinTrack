import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="block mb-2 font-medium text-slate-700">
          Full Name
        </label>

        <div className="flex items-center rounded-xl border border-slate-300 px-4">
          <FiUser className="text-slate-400" />

          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-transparent px-3 py-3 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium text-slate-700">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border border-slate-300 px-4">
          <FiMail className="text-slate-400" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-3 py-3 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium text-slate-700">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-slate-300 px-4">
          <FiLock className="text-slate-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full bg-transparent px-3 py-3 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FiEyeOff className="text-slate-500" />
            ) : (
              <FiEye className="text-slate-500" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-600 py-3 text-white font-semibold hover:bg-emerald-700 transition"
      >
        Create Account
      </button>

      <p className="text-center text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-emerald-600"
        >
          Sign In
        </Link>
      </p>

    </form>
  );
}