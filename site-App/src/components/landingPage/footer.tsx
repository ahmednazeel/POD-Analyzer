import React from 'react'

const Footer = () => {
    return (
         <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-8">

        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src='/img/logo.png' className='rounded-full w-[80px] h-[80px] border border-[#eee]'/>


            <div className="leading-tight">
              <p className="text-sm font-bold text-slate-900">
                POD Market
              </p>

              <p className="text-sm font-bold text-slate-900">
                Decision
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            Make smarter print-on-demand decisions with real
            market data and insights.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Product
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-500">
            <a className="block hover:text-slate-900" href="#">
              Features
            </a>

            <a className="block hover:text-slate-900" href="#">
              How It Works
            </a>

            <a className="block hover:text-slate-900" href="#">
              Pricing
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-500">
            <a className="block hover:text-slate-900" href="#">
              About
            </a>

            <a className="block hover:text-slate-900" href="#">
              Contact
            </a>

            <a className="block hover:text-slate-900" href="#">
              Privacy
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-400 lg:px-8">
          © 2026 POD Market Decision. All rights reserved.
        </div>
      </div>
    </footer>
    )
}

export default Footer