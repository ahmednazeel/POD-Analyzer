import React from 'react'
import {
  Bookmark,
  ShoppingCart,
  Target,
  TrendingUp,
} from "lucide-react";
const features = [
  {
    icon: TrendingUp,
    title: "Market Demand",
    description:
      "Understand search trends and demand signals before investing your time.",
  },
  {
    icon: ShoppingCart,
    title: "Competition Analysis",
    description:
      "Analyze Etsy supply and competition to understand market saturation.",
  },
  {
    icon: Target,
    title: "Opportunity Score",
    description:
      "Turn multiple market signals into one simple score you can act on.",
  },
  {
    icon: Bookmark,
    title: "Track & Save",
    description:
      "Save promising opportunities and monitor them as the market changes.",
  },
];
const Features = () => {
    return (
        <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-emerald-600">
            POWERFUL FEATURES
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Everything you need to find opportunities
          </h2>

          <p className="mt-4 text-slate-600">
            Turn scattered market signals into a clear picture of
            where your next POD opportunity could be.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group rounded-2xl border border-slate-200 
                  bg-white p-7 transition duration-300 
                  hover:-translate-y-2 hover:border-emerald-200 
                  hover:shadow-xl hover:shadow-slate-900/5
                  
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    )
}

export default Features