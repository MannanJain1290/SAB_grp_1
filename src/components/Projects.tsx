"use client";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Villa Solis",
      location: "CLIFFSIDE, MONACO",
      type: "PRIVATE ESTATE",
      image: "/images/villa.png",
      year: "2025",
      sqft: "18,400 SQ FT",
    },
    {
      title: "SAB Pavilion",
      location: "EMIRATES HILLS, DUBAI",
      type: "SIGNATURE RESIDENCE",
      image: "/images/lobby.png",
      year: "2026",
      sqft: "24,000 SQ FT",
    },
    {
      title: "The Monolith",
      location: "5TH AVE, NEW YORK",
      type: "ELITE DUPLEX",
      image: "/images/detail.png",
      year: "2026",
      sqft: "12,200 SQ FT",
    },
  ];

  return (
    <section className="relative bg-matte-black text-white py-32 px-6 md:px-12 border-t border-gold-900/10" id="projects">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto w-full mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-4 block uppercase">
            SIGNATURE PORTFOLIO
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            The Autumn <span className="font-serif italic text-gold-300">Collection</span>
          </h2>
        </div>
        <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider max-w-md leading-relaxed">
          A selective preview of our current unlisted holdings, representing milestones in contemporary modernist design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden border border-gold-900/15 bg-matte-dark/30 backdrop-blur-sm p-6 rounded-sm flex flex-col justify-between transition-all duration-500 hover:border-gold-400/40"
          >
            {/* Project Image block */}
            <div className="w-full aspect-[4/3] overflow-hidden border border-gold-900/25 p-1 bg-matte-dark/40 backdrop-blur-md rounded-sm mb-6">
              <div className="w-full h-full overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-matte-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="p-3 bg-gold-400 rounded-full border border-gold-500 text-matte-black">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata and Title */}
            <div className="flex flex-col items-start gap-4">
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-semibold uppercase">
                {project.location}
              </span>
              
              <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-tight group-hover:text-gold-300 transition-colors duration-300">
                {project.title}
              </h3>

              <div className="w-full h-[1px] bg-gold-900/20 my-2" />

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full">
                <div>
                  <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                    VESSEL/TYPE
                  </span>
                  <span className="text-xs tracking-wider text-gray-300">
                    {project.type}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                    SCALE
                  </span>
                  <span className="text-xs tracking-wider text-gray-300">
                    {project.sqft}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                    ARCHITECT
                  </span>
                  <span className="text-xs tracking-wider text-gray-300">
                    SAB GROUP
                  </span>
                </div>
                <div>
                  <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                    COMPLETED
                  </span>
                  <span className="text-xs tracking-wider text-gray-300">
                    {project.year}
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 flex items-center gap-2 group/btn"
                data-hover="INQUIRE"
              >
                <span className="font-sans text-[10px] tracking-widest text-gold-400 font-semibold uppercase border-b border-gold-400/20 pb-0.5 group-hover/btn:border-gold-300 transition-all duration-300">
                  REQUEST BROCHURE
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center items-center px-12 py-16 text-center bg-matte-dark border border-gold-900/15 rounded-sm relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-950/15 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-xl">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-6 block uppercase">
            RESERVED HOLDINGS
          </span>
          <h3 className="font-serif text-4xl md:text-5xl text-white font-light tracking-tight mb-6">
            Access the <br />
            <span className="font-serif italic text-gold-300">Off-Market Directory</span>
          </h3>
          <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider mb-8 leading-relaxed">
            We maintain a private inventory of over $2B in off-market luxury estates, available exclusively to verified client advocates.
          </p>
          <a
            href="#contact"
            className="inline-block font-sans text-xs tracking-widest font-semibold text-matte-black uppercase bg-gold-400 px-8 py-4 border border-gold-500 hover:bg-transparent hover:text-gold-400 hover:border-gold-400/50 transition-all duration-500 rounded-sm"
            data-hover="REQUEST ACCESS"
          >
            REQUEST DISCREET DOSSIER
          </a>
        </div>
      </div>
    </section>
  );
}
