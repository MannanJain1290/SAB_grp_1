import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";

export default function PropertiesPage() {
  return (
    <main className="relative w-full min-h-screen" style={{ background: "#f0f2f5" }}>
      {/* Properties Hero Banner */}
      <div className="relative w-full h-[35vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_building.png" alt="Properties Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(15, 23, 42, 0.7)" }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Featured Properties</h1>
          <p className="text-white/90 text-lg md:text-xl">Explore our exclusive portfolio of premium residential and commercial spaces</p>
        </div>
      </div>

      <div className="py-8">
        <FeaturedProjects />
        <Projects />
      </div>
    </main>
  );
}
