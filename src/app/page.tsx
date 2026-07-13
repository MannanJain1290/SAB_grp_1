"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Verticals from "@/components/Verticals";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-matte-dark">
      {/* Floating Global Navbar */}
      <Navbar />

      {/* 
        MAIN HOMEPAGE SECTIONS
        Standard scrolling continues naturally.
      */}
      <Hero />
      <About />
      <Verticals />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
