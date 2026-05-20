"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  return (
    <main className="bg-[#0D1B2A] flex-1 flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div>
            <Image
              src={logo}
              width={150}
              height={100}
              alt="logo"
              className="rounded-xl"
            ></Image>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            <p className="text-zinc-400 text-sm mt-2">
              Login to book your favorite facility
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-zinc-300 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22C55E] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-300 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22C55E] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold py-3 rounded-xl transition-colors mt-2"
            >
              Login
            </button>
          </form>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-500 text-sm">or</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <button
            onClick={() => console.log("Google login clicked")}
            className="w-full flex items-center justify-center gap-3 border border-zinc-700 hover:border-[#22C55E] text-zinc-300 hover:text-white font-semibold py-3 rounded-xl transition-colors"
          >
            <FaGoogle className="text-[#22C55E]" />
            Continue with Google
          </button>
          <p className="text-center text-zinc-400 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#22C55E] hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
