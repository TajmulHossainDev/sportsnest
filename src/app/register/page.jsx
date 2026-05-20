"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import logo from "../../../public/assets/logo.png";
import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const RegisterPage = () => {
  return (
    <main className="bg-[#0D1B2A] flex-1 flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Image
            src={logo}
            width={160}
            height={100}
            alt="SportNest Logo"
            className="rounded-xl"
            priority
          />
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Create Account</h1>

            <p className="text-zinc-400 text-sm mt-2">
              Join SportNest and start booking today
            </p>
          </div>

          <Form className="flex flex-col gap-5">
            <TextField
              isRequired
              name="name"
              type="text"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label className="text-zinc-300">Name</Label>

              <Input placeholder="Jhon Doe" />

              <FieldError />
            </TextField>

            <TextField isRequired name="image" type="text">
              <Label className="text-zinc-300">Image URL</Label>

              <Input placeholder="https://example.com/image.jpg" />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-zinc-300">Email</Label>

              <Input placeholder="john@example.com" />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="text-zinc-300">Password</Label>

              <Input placeholder="Enter your password" />

              <Description className="text-zinc-500 text-xs">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            <button
              type="submit"
              className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 mt-2"
            >
              Create Account
            </button>
          </Form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-800" />

            <span className="text-zinc-500 text-sm">or</span>

            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300">
            <FaGoogle className="text-emerald-400" />
            Continue with Google
          </button>

          <p className="text-center text-zinc-400 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-emerald-400 hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
