"use client";

export default function About() {
  return (
    <section
      className="relative w-full bg-matte-black text-white py-32 px-6 md:px-12 flex items-center justify-center overflow-hidden border-t border-gold-900/10"
      id="about"
    >
      {/* Background Subtle Flare */}
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-gold-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-6 block uppercase">
            OUR PHILOSOPHY
          </span>

          <h2
            className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white font-light mb-8"
          >
            We do not simply build structures. We sculpt{" "}
            <span className="font-serif italic text-gold-300">architectural poetry</span> designed to endure for generations.
          </h2>

          <div
            className="font-sans text-sm md:text-base text-gray-400 tracking-wider space-y-6 leading-relaxed max-w-xl"
          >
            <p>
              Founded on the belief that a home is the ultimate expression of personal philosophy, SAB Group bridges the gap between premium fine art and physical form. Every estate we construct is a unique monument, crafted in collaboration with elite Pritzker-winning visionaries.
            </p>
            <p>
              By combining rare materials, cutting-edge engineering, and a meticulous respect for the surrounding landscape, we build sanctuary-grade residences that offer both absolute seclusion and profound aesthetic dialogue.
            </p>
          </div>
        </div>

        {/* Right Column: Image Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden border border-gold-900/30 p-2 bg-matte-dark/50 backdrop-blur-md shadow-2xl rounded-sm"
          >
            {/* Elegant Inner Frame */}
            <div className="absolute inset-4 border border-gold-400/20 pointer-events-none z-10" />
            
            {/* Image */}
            <div className="w-full h-full overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/detail.png"
                alt="Luxury Material Detail"
                className="w-full h-full object-cover brightness-90 contrast-110"
              />
            </div>

            {/* Tiny Luxury Metadata Label */}
            <div className="absolute bottom-6 right-6 z-20 bg-matte-dark/90 backdrop-blur-sm border border-gold-400/20 px-4 py-2 text-[8px] tracking-[0.3em] uppercase text-gold-400">
              SEC. 09 // MATERIAL INTELLIGENCE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
