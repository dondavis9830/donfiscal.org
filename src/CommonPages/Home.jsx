import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const features = [
    {
      number: "01",
      title: "Smart Savings",
      description:
        "Build better saving habits and create a financial future with clear goals and smart planning.",
      icon: "◈",
    },
    {
      number: "02",
      title: "Mutual Funds",
      description:
        "Explore investment opportunities and understand how mutual funds can support your long-term goals.",
      icon: "↗",
    },
    {
      number: "03",
      title: "Debt Recovery",
      description:
        "Get practical guidance to manage existing debts and work towards financial freedom.",
      icon: "◎",
    },
    {
      number: "04",
      title: "Expert Mentors",
      description:
        "Connect with financial mentors and get guidance for making informed money decisions.",
      icon: "*",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-[#153b32]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#f7faf8]/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1
            onMouseMove={handleMouseMove}
            style={{
              backgroundImage: `radial-gradient(circle at ${position.x}% ${position.y}%, #84cc16, #006d5b 55%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
            className="text-3xl font-extrabold font-serif text-transparent cursor-pointer"
          >
            DonFiscal<span className="text-lime-500">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-9 font-medium text-sm">
            <a href="#home" className="hover:text-teal-600">
              Home
            </a>
            <a href="#about" className="hover:text-teal-600">
              About
            </a>
            <a href="#features" className="hover:text-teal-600">
              Features
            </a>
            <a href="#mentors" className="hover:text-teal-600">
              Mentors
            </a>
            <a href="#contact" className="hover:text-teal-600">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={'/auth'}
              className="hidden sm:block font-semibold text-sm hover:text-teal-600"
            >
              Login
            </Link>

            <Link
              to={'/auth'}
              className="bg-[#075c4c] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#06483d] transition"
            >
              Get Started ↗
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#082e27] text-white"
      >
        <div className="absolute -top-40 -right-20 w-125 h-125 bg-teal-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm text-lime-300 mb-8">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Your financial journey starts here
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif leading-[1.1]">
              Make your
              <span className="block text-lime-400">money work</span>
              for your future.
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-7 max-w-xl">
              Take control of your finances with smarter savings, investment
              insights, debt management guidance, and trusted financial mentors.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to={"/auth"}
                className="bg-lime-400 text-[#082e27] px-7 py-4 rounded-full font-bold hover:bg-lime-300 transition"
              >
                Start Your Journey 
              </Link>

              <a
                href="#about"
                className="border border-white/30 px-7 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Explore DonFiscal
              </a>
            </div>

            <div className="flex items-center gap-5 mt-12 text-sm text-gray-300">
              <span>✓ Smarter savings</span>
              <span>✓ Better decisions</span>
            </div>
          </div>

          {/* RIGHT FINANCIAL CARD */}
          <div className="relative">
            <div className="bg-[#10483d] border border-white/10 rounded-4xl p-7 md:p-9 shadow-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300 text-sm">Your financial future</p>
                  <h2 className="text-3xl font-bold mt-2 font-serif">
                    Starts with a plan.
                  </h2>
                </div>
                <div className="text-4xl text-lime-400">◈</div>
              </div>

              <div className="mt-10 bg-[#0b382f] rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Your savings goals</p>

                <div className="flex justify-between items-end mt-3">
                  <h2 className="text-4xl font-bold text-white">
                    Plan better.
                  </h2>
                  <span className="text-lime-400 text-2xl">↗</span>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full mt-6">
                  <div className="w-3/5 h-2 bg-lime-400 rounded-full" />
                </div>

                <p className="text-gray-400 text-xs mt-3">
                  Set your own savings target and track your progress.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="bg-[#0b382f] p-5 rounded-2xl">
                  <span className="text-2xl text-lime-400">↗</span>
                  <h3 className="font-bold mt-3">Invest Smart</h3>
                  <p className="text-xs text-gray-400 mt-2">
                    Understand investment options.
                  </p>
                </div>

                <div className="bg-[#0b382f] p-5 rounded-2xl">
                  <span className="text-2xl text-lime-400">◎</span>
                  <h3 className="font-bold mt-3">Stay Debt-Free</h3>
                  <p className="text-xs text-gray-400 mt-2">
                    Work towards financial freedom.
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-400 text-xs mt-7">
                Small steps today. Stronger finances tomorrow.
              </p>
            </div>

            <div className="absolute -bottom-6 -left-5 bg-lime-400 text-[#082e27] px-5 py-4 rounded-xl font-bold shadow-xl">
              Think Smart. Save Better.
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 uppercase tracking-[4px] text-sm font-bold">
              About DonFiscal
            </p>

            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mt-5">
              Your money deserves
              <span className="text-teal-600"> a better direction.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-7">
              DonFiscal is designed to make personal finance easier to
              understand and manage. We bring savings planning, investment
              education, debt management guidance, and financial mentorship
              together in one place.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-4">
              Our goal is simple: help people make informed financial decisions
              and build a more secure future.
            </p>

            <a
              href="/register"
              className="inline-block mt-8 bg-[#075c4c] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#06483d] transition"
            >
              Discover More ↗
            </a>
          </div>

          <div className="bg-[#e6f1ec] rounded-4xl p-8 md:p-12">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-7 min-h-44">
                <p className="text-4xl text-teal-600">◈</p>
                <h3 className="font-bold text-xl mt-5">Save</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Build consistent saving habits.
                </p>
              </div>

              <div className="bg-[#0c5546] text-white rounded-2xl p-7 min-h-44">
                <p className="text-4xl text-lime-400">↗</p>
                <h3 className="font-bold text-xl mt-5">Grow</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Learn about investments.
                </p>
              </div>

              <div className="bg-[#0c5546] text-white rounded-2xl p-7 min-h-44">
                <p className="text-4xl text-lime-400">◎</p>
                <h3 className="font-bold text-xl mt-5">Manage</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Take control of your debts.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 min-h-44">
                <p className="text-4xl text-teal-600">✳</p>
                <h3 className="font-bold text-xl mt-5">Learn</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Get guidance from mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#edf4f0] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-teal-600 uppercase tracking-[4px] text-sm font-bold">
              What we offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold font-serif mt-5">
              Everything you need to move forward.
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Simple financial tools and guidance to help you build better money
              habits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-4xl text-teal-600">{item.icon}</span>
                  <span className="text-gray-300 font-bold">{item.number}</span>
                </div>

                <h3 className="text-xl font-bold mt-9">{item.title}</h3>

                <p className="text-gray-500 leading-7 text-sm mt-4">
                  {item.description}
                </p>

                <a
                  href="/register"
                  className="inline-block text-teal-700 font-bold mt-7 text-sm"
                >
                  Explore More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTOR SECTION */}
      <section id="mentors" className="max-w-7xl mx-auto px-6 py-28">
        <div className="bg-[#082e27] rounded-4xl p-10 md:p-16 text-white grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lime-400 uppercase tracking-[4px] text-sm font-bold">
              Learn from experts
            </p>

            <h2 className="text-4xl md:text-5xl font-bold font-serif mt-6 leading-tight">
              The right guidance can change your financial journey.
            </h2>

            <p className="text-gray-300 leading-8 mt-6">
              Connect with financial mentors, learn practical strategies, and
              get guidance to make more confident financial decisions.
            </p>

            <a
              href="/mentors"
              className="inline-block mt-8 bg-lime-400 text-[#082e27] px-7 py-4 rounded-full font-bold hover:bg-lime-300 transition"
            >
              Find Your Mentor
            </a>
          </div>

          <div className="bg-[#10483d] rounded-3xl p-8 md:p-12">
            <div className="text-6xl text-lime-400">*</div>
            <h3 className="text-3xl font-bold font-serif mt-7">
              Knowledge is your greatest financial asset.
            </h3>
            <p className="text-gray-300 mt-5 leading-7">
              Learn today. Make better decisions tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-[#dceee4] rounded-4xl px-8 py-16 text-center">
          <p className="text-teal-700 uppercase tracking-[4px] font-bold text-sm">
            Your future starts today
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-5">
            Ready to take control of your money?
          </h2>

          <p className="text-gray-600 mt-5 max-w-xl mx-auto">
            Start building better financial habits with DonFiscal. Your next
            financial decision could be your best one.
          </p>

          <a
            href="/register"
            className="inline-block mt-8 bg-[#075c4c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#06483d] transition"
          >
            Join DonFiscal Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#082e27] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-serif">
              DonFiscal<span className="text-lime-400">.</span>
            </h2>
            <p className="text-gray-400 mt-5 leading-7">
              Smarter financial decisions. Better savings. A stronger future.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Explore</h3>
            <div className="flex flex-col gap-4 text-gray-400 mt-6 text-sm">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#features">Features</a>
              <a href="#mentors">Mentors</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">Our Services</h3>
            <div className="flex flex-col gap-4 text-gray-400 mt-6 text-sm">
              <a href="#features">Savings Planning</a>
              <a href="#features">Investment Education</a>
              <a href="#features">Debt Management</a>
              <a href="#mentors">Financial Mentorship</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">Get Started</h3>
            <div className="flex flex-col gap-4 text-gray-400 mt-6 text-sm">
              <a href="/login">Login</a>
              <a href="/register">Create Account</a>
              <a href="/mentors">Find a Mentor</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 px-6 text-center text-gray-400 text-sm">
          © 2026 DonFiscal. All rights reserved.
          <p className="mt-2">Make smarter money moves.</p>
        </div>
      </footer>
    </div>
  );
}
