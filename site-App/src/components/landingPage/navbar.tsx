import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import { NavLink } from 'react-router';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between p-6 lg:px-8">
                
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img src='/img/logo.png' className='rounded-full w-[70px] h-[70px] border border-[#eee]'/>
                    <div className="leading-tight">
                        <p className="text-lg font-bold text-slate-900">
                            Podify
                        </p>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                <a
                    href="#features"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                    Features
                </a>

                <a
                    href="#how-it-works"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                    How It Works
                </a>

                <a
                    href="#pricing"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                    Pricing
                </a>

                <a
                    href="#faq"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                    FAQ
                </a>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 md:flex">
                <NavLink 
                    className="flex-1 px-7 rounded-xl border border-slate-200 py-2.5"
                    to={'/login'}
                >
                    Log in
                </NavLink>


                <button className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                    Get Started
                </button>
                </div>

                {/* Mobile button */}
                <button
                onClick={() => setOpen(!open)}
                className="rounded-lg p-2 text-slate-700 md:hidden"
                >
                {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
                <nav className="flex flex-col gap-4">
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>

                    <div className="mt-3 flex gap-3">
                        <NavLink 
                            className="flex-1 rounded-xl border border-slate-200 py-3"
                            to={'/login'}
                        >
                            Log in
                        </NavLink>

                        <button className="flex-1 rounded-xl bg-emerald-600 py-3 font-semibold text-white">
                            Get Started
                        </button>
                    </div>
                </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar