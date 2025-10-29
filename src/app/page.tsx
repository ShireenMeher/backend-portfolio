"use client";

import { motion } from "framer-motion";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import TechMarquee from "../components/ui/TechMarquee";
import Projects from "../components/ui/Projects";
import Experience from "../components/ui/Experience";
import Footer from "../components/ui/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5">
        <section id="home" className="pt-28 md:pt-36">
          <Hero />
        </section>

        <section id="stack" className="mt-16 md:mt-24">
          <TechMarquee />
        </section>

        <section id="projects" className="mt-16 md:mt-24">
          <Projects />
        </section>

        <section id="experience" className="mt-16 md:mt-24">
          <Experience />
        </section>
      </main>
      <Footer />
    </>
  );
}
