import React from 'react'
import {
  Clock3,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

const problems = [
    {
        icon: Search,
        title: "Too much guesswork",
        description:
        "People rely on intuition and hope instead of reliable market signals.",
    },
    {
        icon: TrendingUp,
        title: "Trends change fast",
        description:
        "It's difficult to know which ideas are actually gaining momentum.",
    },
    {
        icon: Users,
        title: "High competition",
        description:
        "A niche can look attractive until you discover how crowded it is.",
    },
    {
        icon: Clock3,
        title: "Time & money lost",
        description:
        "Testing random ideas can become expensive and frustrating.",
    },
];

const Problem = () => {
    return (
        <section className="bg-slate-50/60 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">

        <p className="text-sm font-semibold text-emerald-600">
          THE PROBLEM
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Finding a profitable POD niche is hard.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          You shouldn't have to spend hours jumping between platforms
          just to decide whether an idea is worth pursuing.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div 
                key={problem.title} 
                className="
                    text-center hover:shadow-lg p-3 rounded-md hover:bg-white
                    border border-[#eee] transition-shadow duration-300
                  "
                >

                <div 
                  className="
                    mx-auto flex h-12 w-12 items-center justify-center
                    rounded-2xl bg-white text-emerald-600 shadow-sm
                    ring-1 ring-slate-100 
                  "
                >
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {problem.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {problem.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
    )
}

export default Problem