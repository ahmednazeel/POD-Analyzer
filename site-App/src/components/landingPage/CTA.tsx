import React from 'react'
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
         <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute inset-x-0 bottom-0 h-40 bg-emerald-50/70" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">

        <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Stop guessing.
          <span className="block text-emerald-600">
            Start making better decisions.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
          Discover, analyze, and compare POD opportunities
          before you spend your time and money building them.
        </p>

        <button className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
          Get Started

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </button>

        <p className="mt-4 text-xs text-slate-400">
          No credit card required · Cancel anytime
        </p>

      </div>
    </section>
    )
}

export default CTA