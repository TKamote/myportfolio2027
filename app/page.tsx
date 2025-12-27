import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Creator from "@/components/Creator";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Skills />
      <Creator disableExpansion={true} />
      <Contact />
    </>
  );
}

