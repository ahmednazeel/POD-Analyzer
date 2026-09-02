import React from 'react'
import {
  ArrowRight,
  Check,
  Search,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Start with a keyword and discover related market opportunities.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Analyze",
    description:
      "Evaluate demand, trends, and competition for each opportunity.",
  },
  {
    number: "03",
    icon: Check,
    title: "Decide",
    description:
      "Use the opportunity score to focus on ideas worth pursuing.",
  },
];
const HowItWorks = () => {
    return (
        <section
      id="how-it-works"
      className="bg-emerald-50/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">
          <p className="text-sm font-semibold text-emerald-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A simple 3-step process
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <Icon
                    size={22}
                    className="text-emerald-600"
                  />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-emerald-300 lg:block"
                    size={28}
                  />
                )}
              </div>
            );
          })}

        </div>
      </div>
    </section>
    )
}

export default HowItWorks