"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Code2, Rocket, Users, Brain } from "lucide-react"

const timelineItems = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    company: "DIT University, Dehradun",
    description: "Full Stack and DevOps Specialization | CGPA: 8.35/10.0",
  },
  {
    year: "2024",
    title: "3rd Place - CodeGenEx Hackathon",
    company: "Competitive Achievement",
    description: "Delivered a fully functional AI-integrated application under time constraints",
  },
  {
    year: "2024 – Present",
    title: "Building full-stack products",
    company: "RentSpace · NexusBoard · Jarvis",
    description:
      "Designed and shipped end-to-end apps: a peer-to-peer rental marketplace with real-time chat, a collaborative whiteboard with WebRTC video, and a Manifest V3 Chrome extension with 200+ voice commands and dual LLM chat.",
  },
  {
    year: "Ongoing",
    title: "Competitive Programming",
    company: "500+ Problems Solved",
    description: "LeetCode Rating: 1,652 (Top 17.32%) | Codeforces: 984 | CodeChef: 2 Star",
  },
]

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "500+ competitive programming problems solved across platforms",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building great products through effective teamwork",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Always exploring new technologies and AI/ML approaches",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 2000], ["0%", "30%"])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen px-6 py-24"
    >
      {/* Parallax background element */}
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-neon-purple/10 blur-3xl"
        style={{ y: backgroundY }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-neon-green">
            {"// 01. ABOUT_ME"}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            The Story So Far
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A Computer Science undergraduate passionate about building full-stack
            applications and solving algorithmic challenges. Currently pursuing
            B.Tech at DIT University with a specialization in Full Stack and DevOps.
          </p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glass cursor-hover group rounded-xl p-6 transition-all hover:border-neon-green/50"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <value.icon className="mb-4 h-8 w-8 text-neon-green transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="mb-8 font-mono text-sm text-muted-foreground">
            {"// JOURNEY_TIMELINE"}
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                className={`relative mb-8 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1.5 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    className="h-4 w-4 rounded-full border-2 border-neon-green bg-background"
                    whileHover={{ scale: 1.5 }}
                    style={{ boxShadow: "0 0 10px var(--neon-green)" }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="glass cursor-hover rounded-xl p-6 transition-all hover:border-neon-green/30">
                    <span className="font-mono text-sm text-neon-green">
                      {item.year}
                    </span>
                    <h4 className="mt-2 text-xl font-semibold">{item.title}</h4>
                    <p className="text-neon-cyan">{item.company}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
