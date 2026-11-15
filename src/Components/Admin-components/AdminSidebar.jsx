import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="w-72 min-h-screen bg-[#082e27] text-white flex flex-col p-5">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-5 border-b border-white/10">
        <div className="bg-lime-400 text-[#082e27] p-2 rounded-xl text-2xl"></div>

        <div>
          <h1 className="text-2xl font-bold font-serif">
            DonFiscal<span className="text-lime-400">.</span>
          </h1>
          <p className="text-xs text-gray-400 tracking-widest">ADMIN PANEL</p>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-10">
        <div className="flex flex-col gap-3">
          <Link to={'/admin/dashboard'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Dashboard
          </div>
          </Link>

          <Link to={'/admin/users'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            User List
          </div>
          </Link>

         <Link to={'/admin/mentors'}>
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer transition">
            Mentor List
          </div>
         </Link>
        </div>
      </div>

      {/* Admin Profile */}
      <div className="mt-auto border-t border-white/10 pt-5">
        <div className="flex items-center gap-3 px-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-lime-400 text-[#082e27] flex items-center justify-center font-bold text-lg">
            A
          </div>

          <div>
            <h3 className="font-semibold">Admin</h3>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-500/20 hover:text-red-300 cursor-pointer transition">
          Logout
        </div>
      </div>
    </div>
  );
}
