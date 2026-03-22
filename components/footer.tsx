"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { LINKEDIN_URL } from "@/lib/constants"

const socialLinks = [
  { icon: Github, href: "https://github.com/harshitt0418", label: "GitHub" },
  { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="mb-2 font-mono text-lg font-bold text-neon-green">
              {"<"}harshit.dev{"/>"}
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future, one commit at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="cursor-hover rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-neon-green/50 hover:text-neon-green"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Harshit Mittal. All rights reserved.
          </p>
        </div>

        {/* Easter egg hint */}
        <motion.p
          className="mt-8 text-center font-mono text-xs text-muted-foreground/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {"// Hint: Try typing 'sudo hire-me' in the terminal"}
        </motion.p>
      </div>
    </footer>
  )
}
