"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "$4.8B+", label: "ACTIVE PORTFOLIO" },
    { value: "14", label: "GLOBAL VERTICALS" },
    { value: "03", label: "SELECT DESTINATIONS" },
    { value: "100%", label: "DISCREET BROKERAGE" },
  ];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between bg-matte-dark text-white overflow-hidden py-24 px-6 md:px-12"
      id="hero"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url('/images/villa.png')` }}
      />
      
      {/* Luxury Radial Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-dark via-transparent to-matte-dark pointer-events-none" />

      {/* Top spacing to offset fixed navbar */}
      <div className="h-16" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-start">
        <span className="font-sans text-xs tracking-[0.4em] text-gold-400 font-semibold mb-6 block uppercase">
          CURATED ARCHITECTURAL MASTERPIECES
        </span>
        
        <h2 className="font-serif text-5xl md:text-8xl tracking-tight text-white font-light leading-[1.05] max-w-5xl mb-8">
          Where <span className="font-serif italic text-gold-300">artistry</span> meets the absolute boundary of <span className="font-serif italic text-gold-200">living</span>.
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full justify-between mt-4">
          <p className="font-sans text-sm md:text-base text-gray-400 tracking-wider max-w-xl leading-relaxed">
            SAB Group defines the ultimate apex of bespoke residential development. We conceptualize, build, and list properties that stand as permanent sculptural testaments to luxury.
          </p>
          
          <a
            href="#projects"
            className="flex items-center gap-4 group cursor-pointer"
            data-hover="EXPLORE"
          >
            <span className="font-sans text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold border-b border-gold-400/30 pb-1 group-hover:border-gold-300 transition-all duration-300">
              EXPLORE COLLECTIONS
            </span>
            <div className="w-8 h-8 rounded-full border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-400/10 group-hover:border-gold-300 transition-all duration-300">
              <ChevronDown className="w-3.5 h-3.5 text-gold-400 group-hover:translate-y-0.5 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gold-900/25 pt-12 mt-16"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-1 items-start">
            <span className="font-serif text-4xl md:text-5xl tracking-tight text-gold-300">
              {stat.value}
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] text-gray-500 font-semibold uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
