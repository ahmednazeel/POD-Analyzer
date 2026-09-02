import React from 'react'
const RightSideHero = () => {
    return (
        <div className="relative">
        <div className="absolute -inset-8 rounded-full bg-emerald-100/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                        <img src='/logo64.png'/>
                    </div>

                    <span className="text-sm font-semibold">
                    Dashboard
                    </span>
                </div>

                <div className="h-7 w-7 rounded-full bg-slate-200" />
                </div>

                <div className="grid grid-cols-[150px_1fr]">

                {/* Sidebar */}
                <aside className="hidden border-r border-slate-100 bg-slate-50/60 p-4 sm:block">
                    <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                        Dashboard
                    </div>

                    <div className="mt-2 space-y-1 text-xs text-slate-500">
                        <div className="px-3 py-2">Discover</div>
                        <div className="px-3 py-2">Analysis</div>
                        <div className="px-3 py-2">Saved</div>
                        <div className="px-3 py-2">Tracked</div>
                    </div>
                </aside>

                {/* Content */}
                <div className="p-5">

                    <h3 className="text-sm font-bold text-slate-900">
                    Overview
                    </h3>

                    {/* Stats */}
                    <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {[
                        ["1,248", "Opportunities"],
                        ["312", "High Score"],
                        ["86", "Keywords"],
                        ["78/100", "Avg. Score"],
                    ].map(([value, label]) => (
                        <div
                        key={label}
                        className="rounded-xl border border-slate-100 p-3"
                        >
                        <p className="text-lg font-bold text-slate-900">
                            {value}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                            {label}
                        </p>
                        </div>
                    ))}
                    </div>

                    {/* Chart */}
                    <div className="mt-4 rounded-xl border border-slate-100 p-4">
                    <p className="text-xs font-semibold">
                        Opportunity Score
                    </p>

                    <div className="mt-5 flex h-28 items-end gap-2">
                        {[25, 35, 30, 45, 52, 70, 62, 82, 72].map(
                        (height, index) => (
                            <div
                            key={index}
                            className="flex-1 rounded-t-md bg-emerald-100"
                            style={{ height: `${height}%` }}
                            />
                        )
                        )}
                    </div>
                    </div>

                    {/* Top opportunity */}
                    <div className="mt-4 rounded-xl border border-slate-100 p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold">
                                Top Opportunity
                            </p>

                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                                High
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold">Cat Lover Vintage</p>
                                <p className="mt-1 text-xs text-slate-500">High demand · Low competition </p>
                            </div>

                            <div className="text-2xl font-bold text-emerald-600">92</div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default RightSideHero