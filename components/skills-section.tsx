"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Server, Cloud, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "neon-green",
    skills: [
      { name: "C/C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript/TypeScript", level: 92 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "neon-cyan",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "neon-purple",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Databases & AI",
    icon: Database,
    color: "neon-green",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Google Gemini API", level: 85 },
      { name: "RAG / Vector DB", level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "neon-cyan",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS (EC2, S3)", level: 78 },
      { name: "Vercel / Render", level: 90 },
      { name: "Linux / Nginx", level: 80 },
    ],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    color: "neon-purple",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Socket.io", level: 88 },
      { name: "Jest", level: 75 },
      { name: "Postman", level: 90 },
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-neon-green">
            {"// 04. TECH_STACK"}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A comprehensive toolkit built through building real-world projects
            and solving 500+ competitive programming problems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass cursor-hover rounded-xl p-6 transition-all hover:border-neon-green/30"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`rounded-lg bg-${category.color}/20 p-2`}
                >
                  <category.icon className={`h-5 w-5 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-mono">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className={`h-full bg-${category.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        style={{
                          boxShadow: `0 0 10px var(--${category.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="mb-6 font-mono text-sm text-muted-foreground">
            {"// OTHER_TECHNOLOGIES"}
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Redux",
              "WebSockets",
              "Redis",
              "Pinecone",
              "Roboflow",
              "Bash",
              "HTML/CSS",
              "Webpack",
              "ESLint",
              "JWT",
              "OAuth 2.0",
              "Cloudinary",
              "WebRTC",
              "TanStack Query",
              "Pandas",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="cursor-hover rounded-full border border-border bg-card/50 px-4 py-2 font-mono text-sm transition-all hover:border-neon-green/50 hover:bg-neon-green/10 hover:text-neon-green"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.02 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
