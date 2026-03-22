"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileDown } from "lucide-react"
import { RESUME_URL } from "@/lib/constants"

const navLinks: {
  name: string
  href: string
  ariaLabel?: string
}[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  {
    name: "CP",
    href: "#cp",
    ariaLabel: "Competitive programming profiles and stats",
  },
  { name: "Terminal", href: "#terminal" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${scrolled ? "glass py-3" : "py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="cursor-hover group flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-green/50 bg-neon-green/10 font-mono text-lg font-bold text-neon-green transition-all group-hover:bg-neon-green group-hover:text-background">
              H
            </div>
            <span className="hidden font-mono text-sm text-muted-foreground sm:block">
              harshit.dev
            </span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                aria-label={link.ariaLabel}
                className={`cursor-hover relative px-4 py-2 font-mono text-sm transition-colors ${activeSection === link.href.slice(1)
                    ? "text-neon-green"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-green"
                    layoutId="activeSection"
                    style={{ boxShadow: "0 0 10px var(--neon-green)" }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Harshit_Mittal_Resume.pdf"
              className="cursor-hover flex items-center gap-2 rounded-lg border border-neon-green/40 bg-neon-green/10 px-4 py-2 font-mono text-sm text-neon-green transition-colors hover:border-neon-green hover:bg-neon-green/20"
              whileHover={{ y: -2 }}
            >
              <FileDown className="h-4 w-4" aria-hidden />
              Resume
            </motion.a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-hover rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-neon-green/50 hover:text-neon-green md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex h-full flex-col items-center justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className={`cursor-hover font-mono text-2xl transition-colors ${activeSection === link.href.slice(1)
                      ? "text-neon-green"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-neon-green">{`0${index + 1}.`}</span>{" "}
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Harshit_Mittal_Resume.pdf"
                className="cursor-hover flex items-center gap-2 font-mono text-2xl text-neon-green"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-neon-green">{`0${navLinks.length + 1}.`}</span>{" "}
                <FileDown className="inline h-7 w-7" aria-hidden />
                Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
