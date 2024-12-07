"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0E1016] text-[#e4ded7]">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
