import React from 'react'
import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
const LeftSideHero = () => {
    return (
        <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <TrendingUp size={16} /> Data-driven POD research
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
                Make smarter
                <span className="block">print-on-demand </span>

                <span className="block text-emerald-600">decisions.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
                Discover promising POD opportunities using market trends,
                demand signals, and competition data — all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                Start Free Trial

                <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                />
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50">
                <PlayCircle size={18} />
                See How It Works
                </button>
            </div>

            {/* Social proof */}
            <div className="mt-9 flex items-center gap-4">
                <div className="flex -space-x-3">
                {["A", "M", "S"].map((letter) => (
                    <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-sm font-semibold text-slate-700"
                    >
                    {letter}
                    </div>
                ))}
                </div>

                <p className="text-sm text-slate-500">
                Join creators making
                <br />
                data-driven decisions.
                </p>
            </div>
        </div>
    )
}

export default LeftSideHero