import { ArrowRight, CheckCircle2 } from "lucide-react";

const opportunities = [
    {
        name: "Cat Lover Vintage Design",
        demand: "High",
        competition: "Low",
        score: 92,
    },
    {
        name: "Mental Health Awareness",
        demand: "High",
        competition: "Medium",
        score: 85,
    },
    {
        name: "Retro Sun And Moon",
        demand: "Medium",
        competition: "Low",
        score: 78,
    },
    {
        name: "Gym Motivation Quote",
        demand: "High",
        competition: "High",
        score: 62,
    },
];

export default function OpportunityPreview() {
    return (
        <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

            {/* Text */}
            <div>
            <p className="text-sm font-semibold text-emerald-600">
                SEE IT IN ACTION
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Real data.
                <br />
                Real insights.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
                Instead of looking at one signal, POD Market Decision
                combines multiple sources to help you understand the
                opportunity behind a keyword.
            </p>

            <ul className="mt-7 space-y-3">
                {[
                "Google Trends signals",
                "Search demand",
                "Etsy market data",
                "Opportunity scoring",
                ].map((item) => (
                <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                    <CheckCircle2
                    size={18}
                    className="text-emerald-600"
                    />

                    {item}
                </li>
                ))}
            </ul>

            <button className="group mt-8 inline-flex items-center gap-2 font-semibold text-emerald-600">
                Try it yourself

                <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
                />
            </button>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h3 className="font-semibold text-slate-900">
                Top Opportunities
                </h3>

                <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-500">
                View all
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                        Keyword
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                        Demand
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                        Competition
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                        Score
                    </th>
                    </tr>
                </thead>

                <tbody>
                    {opportunities.map((item) => (
                    <tr
                        key={item.name}
                        className="border-b border-slate-100 last:border-0"
                    >
                        <td className="px-5 py-4">
                        <span className="text-sm font-medium text-slate-800">
                            {item.name}
                        </span>
                        </td>

                        <td className="px-5 py-4">
                        <span className="text-xs font-semibold text-emerald-600">
                            {item.demand}
                        </span>
                        </td>

                        <td className="px-5 py-4">
                        <span
                            className={`text-xs font-semibold ${
                            item.competition === "Low"
                                ? "text-emerald-600"
                                : item.competition === "Medium"
                                ? "text-amber-500"
                                : "text-red-500"
                            }`}
                        >
                            {item.competition}
                        </span>
                        </td>

                        <td className="px-5 py-4">
                        <span
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                            item.score >= 80
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-orange-50 text-orange-600"
                            }`}
                        >
                            {item.score}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            </div>

        </div>
        </section>
    );
}