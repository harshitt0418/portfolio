"use client"

import { useState, useEffect } from "react"
import { BootScreen } from "@/components/boot-screen"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CompetitiveProgrammingSection } from "@/components/competitive-programming-section"
import { TerminalSection } from "@/components/terminal-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <div className="relative">
      {/* Boot animation */}
      {!bootComplete && <BootScreen onComplete={() => setBootComplete(true)} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Particle background */}
      <ParticleBackground />

      {/* Main content */}
      {bootComplete && (
        <>
          <Navigation />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <CompetitiveProgrammingSection />
            <SkillsSection />
            <TerminalSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
