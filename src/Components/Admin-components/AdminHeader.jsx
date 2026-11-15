import React from "react";

export default function AdminHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-500 px-8 py-4 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-[#153b32] font-serif">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
          <span className="text-sm text-gray-400 w-100">
            Search anything...
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-5">
          <div className="w-11 h-11 rounded-full bg-[#dceee4] text-[#075c4c] flex items-center justify-center font-bold text-lg">
            A
          </div>

          <div className="hidden sm:block">
            <h3 className="text-sm font-bold text-[#153b32]">Admin</h3>
            <p className="text-xs text-gray-400">Super Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
