import React from 'react'

const Testimonial = () => {
    return (
         <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <div className="text-5xl text-emerald-200">
          “
        </div>

        <blockquote className="mt-4 text-2xl font-semibold leading-relaxed tracking-tight text-slate-900">
          Stop guessing which niche to build.
          Use the data to understand the opportunity first.
        </blockquote>

        <div className="mt-7">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold">
            PM
          </div>

          <p className="mt-3 text-sm font-semibold text-slate-900">
            POD Market Decision
          </p>

          <p className="text-sm text-slate-500">
            Data-driven POD research
          </p>
        </div>

      </div>
    </section>
    )
}

export default Testimonial