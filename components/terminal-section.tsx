"use client"

import { useState, useRef, useEffect } from "react"
import { LINKEDIN_URL } from "@/lib/constants"
import { motion, useInView } from "framer-motion"
import { Terminal } from "lucide-react"

interface CommandOutput {
  command: string
  output: React.ReactNode
  isError?: boolean
}

const commands: Record<string, React.ReactNode> = {
  help: (
    <div className="space-y-1">
      <p className="text-neon-cyan">Available commands:</p>
      <p>
        <span className="text-neon-green">whoami</span> - Learn about me
      </p>
      <p>
        <span className="text-neon-green">skills</span> - View my tech stack
      </p>
      <p>
        <span className="text-neon-green">projects</span> - See my work
      </p>
      <p>
        <span className="text-neon-green">contact</span> - Get in touch
      </p>
      <p>
        <span className="text-neon-green">social</span> - Social links
      </p>
      <p>
        <span className="text-neon-green">education</span> - My education
      </p>
      <p>
        <span className="text-neon-green">cp</span> - Competitive programming stats
      </p>
      <p>
        <span className="text-neon-green">clear</span> - Clear terminal
      </p>
      <p>
        <span className="text-neon-green">sudo hire-me</span> - Secret command
      </p>
    </div>
  ),
  whoami: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Harshit Mittal</p>
      <p>
        Computer Science Undergraduate at DIT University, Dehradun. Full-Stack
        Developer with a passion for AI/ML and Competitive Programming.
      </p>
      <p className="text-muted-foreground">
        Specializing in Full Stack and DevOps | CGPA: 8.35/10.0
      </p>
    </div>
  ),
  skills: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Tech Stack</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          "C/C++",
          "Python",
          "TypeScript",
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Socket.io",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded border border-neon-green/30 bg-neon-green/10 px-2 py-1 text-sm text-neon-green"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Featured Projects</p>
      <div className="space-y-1">
        <p>
          <span className="text-neon-green">[1]</span> RentSpace - Peer-to-Peer
          Rental Marketplace with real-time chat
        </p>
        <p>
          <span className="text-neon-green">[2]</span> NexusBoard - Real-Time
          Collaborative Whiteboard & Video Platform
        </p>
        <p>
          <span className="text-neon-green">[3]</span> Jarvis Browser Copilot -
          AI-Powered Chrome Extension with 200+ voice commands
        </p>
      </div>
      <p className="pt-2 font-mono text-xs leading-relaxed text-neon-green">
        <span className="text-muted-foreground">repos:</span>{" "}
        <a
          href="https://github.com/harshitt0418/RentSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neon-cyan"
        >
          RentSpace
        </a>
        {" · "}
        <a
          href="https://github.com/harshitt0418/NexusBoard"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neon-cyan"
        >
          NexusBoard
        </a>
        {" · "}
        <a
          href="https://github.com/harshitt0418/jarvis-browser-copilot"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neon-cyan"
        >
          Jarvis
        </a>
      </p>
      <p className="font-mono text-xs leading-relaxed text-neon-cyan">
        <span className="text-muted-foreground">live:</span>{" "}
        <a
          href="https://rent-space-seven.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neon-green"
        >
          rent-space-seven.vercel.app
        </a>
        {" · "}
        <a
          href="https://nexusboard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neon-green"
        >
          nexusboard.vercel.app
        </a>
      </p>
      <p className="text-muted-foreground">
        Scroll down to the projects section for more details
      </p>
    </div>
  ),
  contact: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Contact Info</p>
      <p>
        Email:{" "}
        <a href="mailto:hmittal0418@gmail.com" className="text-neon-green underline">
          hmittal0418@gmail.com
        </a>
      </p>
      <p>
        Location: <span className="text-foreground">Dehradun, India</span>
      </p>
      <p className="text-muted-foreground">
        Open to internships and collaboration opportunities
      </p>
    </div>
  ),
  social: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Social Links</p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/harshitt0418" className="text-neon-green hover:underline">
          github.com/harshitt0418
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-green hover:underline"
        >
          linkedin.com/in/harshit-mittal-1a7707245
        </a>
      </p>
    </div>
  ),
  education: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Education</p>
      <p className="text-neon-green">DIT University, Dehradun</p>
      <p>B.Tech in Computer Science & Engineering</p>
      <p className="text-muted-foreground">Full Stack and DevOps Specialization</p>
      <p className="text-muted-foreground">April 2023 - Present | CGPA: 8.35/10.0</p>
    </div>
  ),
  cp: (
    <div className="space-y-2">
      <p className="text-neon-cyan">// Competitive Programming Stats</p>
      <div className="space-y-1">
        <p>
          <span className="text-neon-green">Codeforces:</span> Rating 984 (max. 1124) | 190 problems
        </p>
        <p>
          <span className="text-neon-green">LeetCode:</span> Rating 1,652 | Top 17.32% | 220 problems
        </p>
        <p>
          <span className="text-neon-green">CodeChef:</span> 2 Star | Rating 1470 | 62 problems
        </p>
        <p className="text-neon-purple font-semibold">
          Total: 500+ problems solved across all platforms
        </p>
      </div>
    </div>
  ),
  "sudo hire-me": (
    <div className="space-y-2">
      <p className="text-neon-cyan">
        // ACCESS GRANTED - INITIATING HIRE SEQUENCE
      </p>
      <p className="text-neon-green">
        Congratulations! You{"'"}ve discovered the secret command.
      </p>
      <p>Let{"'"}s build something amazing together!</p>
      <p className="animate-pulse text-neon-purple">
        Sending resume to your inbox... Contact: hmittal0418@gmail.com
      </p>
    </div>
  ),
}

export function TerminalSection() {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "",
      output: (
        <div className="text-muted-foreground">
          <p>Welcome to Harshit{"'"}s Terminal v1.0.0</p>
          <p>
            Type <span className="text-neon-green">help</span> to see available
            commands
          </p>
        </div>
      ),
    },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === "clear") {
      setHistory([])
      setInput("")
      return
    }

    const output = commands[trimmedCmd]

    if (output) {
      setHistory((prev) => [...prev, { command: cmd, output }])
    } else if (trimmedCmd === "") {
      setHistory((prev) => [...prev, { command: "", output: null }])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: (
            <p className="text-red-400">
              Command not found: {cmd}. Type {"'"}help{"'"} for available
              commands.
            </p>
          ),
          isError: true,
        },
      ])
    }

    setInput("")
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <section
      ref={sectionRef}
      id="terminal"
      className="relative min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-8 flex items-center gap-3">
            <Terminal className="h-6 w-6 text-neon-green" />
            <h2 className="font-mono text-sm text-muted-foreground">
              {"// INTERACTIVE_TERMINAL"}
            </h2>
          </div>

          {/* Terminal window */}
          <motion.div
            className="glass overflow-hidden rounded-xl"
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border bg-card/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-sm text-muted-foreground">
                harshit@portfolio:~$
              </span>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="scanlines relative h-96 overflow-y-auto p-4 font-mono text-sm"
              onClick={() => inputRef.current?.focus({ preventScroll: true })}
            >
              {history.map((item, index) => (
                <div key={index} className="mb-4">
                  {item.command && (
                    <div className="flex items-center gap-2">
                      <span className="text-neon-green">$</span>
                      <span className="text-foreground">{item.command}</span>
                    </div>
                  )}
                  {item.output && (
                    <div className="mt-2 pl-4 text-muted-foreground">
                      {item.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2">
                <span className="text-neon-green">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand(input)
                    }
                  }}
                  className="flex-1 bg-transparent text-foreground outline-none"
                  placeholder="Type a command..."
                />
                <motion.span
                  className="h-4 w-2 bg-neon-green"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Quick commands */}
          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="text-sm text-muted-foreground">Try:</span>
            {["whoami", "skills", "projects", "cp", "contact"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInput(cmd)
                  handleCommand(cmd)
                }}
                className="cursor-hover rounded border border-border bg-card/50 px-3 py-1 font-mono text-sm text-neon-green transition-colors hover:border-neon-green/50 hover:bg-neon-green/10"
              >
                {cmd}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
