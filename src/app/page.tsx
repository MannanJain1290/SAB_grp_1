"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Verticals from "@/components/Verticals";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen" style={{ background: "#f0f2f5" }}>
      {/* Hero - Full width cityscape with property search tabs */}
      <Hero />

      {/* About - Clients marquee + Company Profile */}
      <About />

      {/* Verticals - Commercial & Residential category tiles */}
      <Verticals />

      {/* Featured Projects (Premium Lodha/Phoenix style showcase) */}
      <FeaturedProjects />

      {/* Projects - New Launches listings */}
      <Projects />

      {/* Leadership - Alternating portrait + bio */}
      <Leadership />

      {/* Contact - Form + WhatsApp float */}
      <Contact />
    </main>
  );
}
