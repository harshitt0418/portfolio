"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react"
import { LINKEDIN_URL, RESUME_URL } from "@/lib/constants"

const roles = [
  "Full-Stack Developer",
  "AI/ML Enthusiast",
  "Competitive Programmer",
  "DevOps Engineer",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < role.length) {
            setDisplayedText(role.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-block rounded-full border border-neon-green/30 bg-neon-green/10 px-4 py-2 font-mono text-sm text-neon-green">
              {">"} Hello, World!
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="text-foreground">{"I'm "}</span>
            <span className="relative">
              <span className="relative z-10 text-neon-green neon-text-green">
                Harshit Mittal
              </span>
              <motion.span
                className="absolute -inset-2 -z-10 rounded-lg bg-neon-green/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="h-12">
            <p className="font-mono text-xl text-muted-foreground sm:text-2xl md:text-3xl">
              {"<"}
              <span className="text-neon-cyan">{displayedText}</span>
              <motion.span
                className="inline-block w-0.5 bg-neon-cyan"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
              {" />"}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Computer Science undergrad at DIT University. I build full-stack
            applications with modern technologies and love solving complex
            problems through competitive programming.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="cursor-hover group relative overflow-hidden rounded-lg bg-neon-green px-8 py-4 font-semibold text-background transition-all hover:shadow-[0_0_30px_var(--neon-green)]"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 -z-0 bg-neon-cyan"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a
              href="#terminal"
              className="cursor-hover group rounded-lg border border-border bg-card/50 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:border-neon-green/50 hover:bg-card"
            >
              <span className="font-mono text-neon-green">{">"}</span> Open
              Terminal
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Harshit_Mittal_Resume.pdf"
              className="cursor-hover inline-flex items-center gap-2 rounded-lg border border-neon-green/40 bg-neon-green/10 px-8 py-4 font-semibold text-neon-green transition-all hover:border-neon-green hover:bg-neon-green/20 hover:shadow-[0_0_24px_oklch(0.82_0.21_195_/_0.25)]"
            >
              <FileDown className="h-5 w-5" aria-hidden />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-4"
          >
            {[
              { icon: Github, href: "https://github.com/harshitt0418", label: "GitHub" },
              { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="cursor-hover text-muted-foreground transition-colors hover:text-neon-green"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted-foreground">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 text-neon-green" />
        </motion.div>
      </motion.div>

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.25 0.025 285 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.25 0.025 285 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  )
}
