
import React from 'react'

export default function PNF() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-5">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-9xl font-extrabold text-emerald-700 tracking-widest">404</h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto my-6 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-800 mb-3"> Page Not Found! </h2>
        <p className=" text-base leading-7 mb-8">
          Oops! The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
