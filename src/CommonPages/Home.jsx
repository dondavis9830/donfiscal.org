import React, { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center" >
        <h1
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${position.x}%`,
            "--mouse-y": `${position.y}%`,
          }}
          className="text-[18vw] font-extrabold font-serif bg-clip-text text-transparent mouse-gradient cursor-pointer"
        >
          DonFiscal
        </h1>
      </div>

      {/* navbar */}
      <nav className="sticky top-3 bg-teal-500 m-3 rounded-xl flex items-center justify-center gap-5 text-2xl py-3 font-bold font-serif z-100">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Feactures</h1>
        <h1>Contact</h1>
      </nav>

      {/* hero section */}
      <div className="relative bg-[url('https://www.nerdwallet.com/_image?href=https%3A%2F%2Fwww.nerdwallet.com%2Fcdn%2Ffront-page-astro%2Fheader%2Fmweb%2Fheader-background-image-202601161024.webp&w=1920&h=800&q=72&f=webp&dpl=dpl_2xcdDkvs8MyGCRrptQZjfZyrmNzH')] bg-cover w-full bg-center min-h-[70vh] ">
          <div className="bg-cover py-46 ps-10 w-[70%] absolute bg-[linear-gradient(to_right,#14532D,transparent)]">
            <p className="text-6xl font-bold font-serif text-white">Smart financial decisions <br /> start with <span className="text-lime-600">DonFiscal</span></p>
            <p className="text-white font-bold ">Navigate every money move with guidance you can trust.</p>
            
          </div>
      </div>

      {/* introduction section */}
      <section className="grid grid-cols-2">
        {/* left side introduction */}
        <div className="flex flex-col justify-center items-center font-serif p-5">
          <h1 className="text-teal-500 font-bold text-xl">
            What is DonFiscal?
          </h1>
          <h1 className="font-bold text-4xl my-3">
            Your home base for money clarity
          </h1>
          <p className="text-pretty font-medium text-justify text-xl ps-10">
            DonFiscal simplifies finances by bringing all your accounts together
            into one clear view. Always know where your money is and where it's
            going, achieve your goals quicker, and collaborate with your partner
            or professional at no extra cost.
          </p>
         
        </div>

        {/* right side login form */}
        <div className="p-30">
          <div className="text-center mb-8">
            <p className=" mt-2 text-xl">
              Manage your money. Build your future.
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800">
            
          </h2>
          <p className="text-sm  mt-2 mb-6">
            Sign in to continue to your account.
          </p>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
            <div>
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
      </section>
    </div>
  );
}
