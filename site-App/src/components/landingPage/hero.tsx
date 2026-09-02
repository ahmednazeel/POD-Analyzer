import React from 'react'
import LeftSideHero from './leftSideHero';
import RightSideHero from './rightSideHero';
const Hero = () => {
    
  return (
        <section className="overflow-hidden bg-white">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
                {/* Left */}
                <LeftSideHero/>
                {/* Dashboard Preview */}
                <RightSideHero/>
            </div>
        </section>
  )
}

export default Hero