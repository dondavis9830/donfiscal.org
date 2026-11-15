import React from "react";

import { Link } from 'react-router-dom';

export default function MentorSidebar() {
  return (
    <div className="w-72 h-screen shrink-0 bg-[#082e27] text-white flex flex-col p-5">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-5 border-b border-white/10">
        <div className="bg-lime-400 text-[#082e27] p-2 rounded-xl text-2xl">
        </div>

        <div>
          <h1 className="text-2xl font-bold font-serif">
            DonFiscal<span className="text-lime-400">.</span>
          </h1>
          <p className="text-xs text-gray-400 tracking-widest">MENTOR PANEL</p>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest px-4 mb-5">
          Mentor Menu
        </p>

        <div className="flex flex-col gap-3">
          <Link to={'/mentor/dashboard'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Dashboard
          </div>
          </Link>

          <Link to={'/mentor/profile'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Profile
          </div>
          </Link>

          <Link to={'/mentor/notification'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Notification
          </div>
          </Link>

          <Link to={'/mentor/paymentHistory'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Payment History
          </div>
          </Link>

          <Link to={'/mentor/uploads'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Video uploading
          </div>
          </Link>
        </div>
      </div>

      {/* Mentor Profile */}
      <div className="mt-auto border-t border-white/10 pt-5">
        <div className="flex items-center gap-3 px-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-lime-400 text-[#082e27] flex items-center justify-center font-bold text-lg">
            M
          </div>

          <div>
            <h3 className="font-semibold">Mentor Name</h3>
            <p className="text-xs text-gray-400">Financial Mentor</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-500/20 hover:text-red-300 cursor-pointer transition">
          Logout
        </div>
      </div>
    </div>
  );
}
