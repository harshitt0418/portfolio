"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Layers } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "RentSpace",
    description:
      "Peer-to-Peer Community Rental Marketplace for cameras, bikes, tools, and more with real-time chat.",
    longDescription:
      "Built a full-stack MERN rental marketplace where users can list, browse, and rent items with real-time chat, typing indicators, and in-app notifications powered by Socket.io. Engineered a complete rental request lifecycle with date-based conflict detection, JWT access/refresh token rotation with httpOnly cookies and Google OAuth 2.0.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Cloudinary", "Tailwind CSS"],
    color: "neon-green",
    image: "/projects/rentspace.jpg",
    github: "https://github.com/harshitt0418/RentSpace",
    live: "https://rent-space-seven.vercel.app",
    stats: { features: "Real-time Chat", auth: "OAuth 2.0", deploy: "Vercel + Render" },
  },
  {
    id: 2,
    title: "NexusBoard",
    description:
      "Real-Time Collaborative Whiteboard & Video Platform with multi-user sync and WebRTC.",
    longDescription:
      "Built a production-grade MERN collaborative whiteboard supporting freehand drawing with Bezier curves, a segment-aware eraser, per-user undo/redo stacks, PDF import, and real-time cursor sync via Socket.io. Integrated mesh WebRTC for live video/audio, real-time chat panel with typing indicators, and QR-code room sharing.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC", "JWT", "Tailwind CSS"],
    color: "neon-cyan",
    image: "/projects/nexusboard.jpg",
    github: "https://github.com/harshitt0418/NexusBoard",
    live: "https://nexusboard.vercel.app",
    stats: { drawing: "Bezier Curves", video: "WebRTC Mesh", auth: "Magic Links" },
  },
  {
    id: 3,
    title: "Jarvis Browser Copilot",
    description:
      "AI-Powered Chrome Extension with 200+ voice commands for hands-free browser automation.",
    longDescription:
      "Built a Manifest V3 Chrome extension supporting 200+ voice commands via the Web Speech API for hands-free browser automation (tab management, navigation, media controls, search). Integrated a dual-AI chat panel (Groq Llama 3.3 70B as primary, Gemini 2.0 Flash as fallback) with page summarization and Highlight & Ask feature.",
    tags: ["JavaScript", "Chrome Extensions API", "Web Speech API", "Groq API", "Google Gemini API"],
    color: "neon-purple",
    image: "/projects/jarvis.jpg",
    github: "https://github.com/harshitt0418/jarvis-browser-copilot",
    stats: { commands: "200+", ai: "Dual LLM", features: "Voice + Chat" },
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            {"// 02. FEATURED_PROJECTS"}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Things I{"'"}ve Built
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A selection of full-stack projects showcasing my skills in building
            real-time applications with modern technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="cursor-hover group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div
                className={`glass relative h-80 overflow-hidden border-2 transition-all duration-300 ${
                  hoveredProject === project.id
                    ? `border-${project.color}/50`
                    : "border-transparent"
                }`}
                style={{
                  boxShadow:
                    hoveredProject === project.id
                      ? `0 20px 40px -20px var(--${project.color})`
                      : "none",
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${project.color}/20 to-transparent opacity-50`}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <Layers className={`h-5 w-5 text-${project.color}`} />
                      <span className="font-mono text-xs text-muted-foreground">
                        PROJECT_{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-card/50 px-2 py-1 font-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded-full border border-border bg-card/50 px-2 py-1 font-mono text-xs">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`font-mono text-${project.color}`}>
                    {"<"} Click to explore {"/>"}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal content */}
            <motion.div
              className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="cursor-hover absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Project info */}
              <div className="space-y-6">
                <div>
                  <span
                    className={`font-mono text-sm text-${selectedProject.color}`}
                  >
                    {"// PROJECT_DETAILS"}
                  </span>
                  <h3 className="mt-2 text-3xl font-bold">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {selectedProject.longDescription}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-lg border border-border bg-card/50 p-4 text-center"
                    >
                      <p className={`text-lg font-bold text-${selectedProject.color}`}>
                        {value}
                      </p>
                      <p className="text-xs capitalize text-muted-foreground">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="mb-3 font-mono text-sm text-muted-foreground">
                    TECH_STACK:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border border-${selectedProject.color}/30 bg-${selectedProject.color}/10 px-3 py-1 font-mono text-sm text-${selectedProject.color}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-hover flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-${selectedProject.color}/20`}
                  >
                    <Github className="h-5 w-5" />
                    View on GitHub
                  </a>
                  {selectedProject.live ? (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cursor-hover flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90 ${
                        selectedProject.color === "neon-green"
                          ? "bg-neon-green"
                          : selectedProject.color === "neon-cyan"
                            ? "bg-neon-cyan"
                            : "bg-neon-purple"
                      }`}
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live site
                    </a>
                  ) : (
                    <p className="w-full text-sm text-muted-foreground">
                      Chrome extension — clone or load unpacked from the GitHub
                      README.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
