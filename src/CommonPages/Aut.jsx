import React from "react";

export default function Aut() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://wallpapercave.com/wp/wp2446261.jpg')] bg-cover bg-center px-4 relative">
      <div className="absolute inset-0 bg-slate-950/60"></div>
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white/95 backdrop-blur-md p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-500">
            DonFiscal<span className="text-slate-800"></span>
          </h1>
          <p className=" mt-2 text-sm">Manage your money. Build your future.</p>
        </div>
        <h2 className="text-2xl font-semibold text-slate-800">Welcome Back!</h2>
        <p className="text-sm  mt-2 mb-6">
          Sign in to continue to your account.
        </p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              UserName
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div className="flex justify-end items-center text-sm">
            <a
              href="#"
              className="text-emerald-500 font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            {" "}
            Sign In{" "}
          </button>
        </form>
        <p className="text-center text-sm  mt-7">
          {" "}
          Don't have an account?{" "}
          <a
            href="#"
            className="ml-1 font-semibold text-emerald-700 hover:underline"
          >
            Create Account
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
