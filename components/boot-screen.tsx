"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bootSequence = [
  { text: "INITIALIZING SYSTEM...", delay: 0 },
  { text: "[OK] Loading kernel modules", delay: 300 },
  { text: "[OK] Mounting filesystems", delay: 600 },
  { text: "[OK] Starting network services", delay: 900 },
  { text: "[OK] Loading portfolio data", delay: 1200 },
  { text: "[OK] Compiling assets", delay: 1500 },
  { text: "[OK] Establishing secure connection", delay: 1800 },
  { text: "", delay: 2100 },
  { text: "SYSTEM READY", delay: 2400 },
  { text: "Welcome, visitor.", delay: 2700 },
]

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, bootSequence[currentLine].text])
        setCurrentLine((prev) => prev + 1)
      }, bootSequence[currentLine].delay - (currentLine > 0 ? bootSequence[currentLine - 1].delay : 0))

      return () => clearTimeout(timer)
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 800)
      }, 500)
      return () => clearTimeout(completeTimer)
    }
  }, [currentLine, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="scanlines relative w-full max-w-2xl p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-sm"
            >
              {/* Terminal header */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-muted-foreground">system_boot.sh</span>
              </div>

              {/* Boot lines */}
              <div className="space-y-1">
                {displayedLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      line.includes("[OK]")
                        ? "text-neon-green"
                        : line === "SYSTEM READY"
                        ? "text-neon-cyan neon-text-green text-lg font-bold"
                        : line === "Welcome, visitor."
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                {/* Cursor blink */}
                {currentLine < bootSequence.length && (
                  <motion.span
                    className="inline-block h-4 w-2 bg-neon-green"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Progress bar */}
              <div className="mt-8">
                <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full bg-neon-green"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(currentLine / bootSequence.length) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ boxShadow: "0 0 10px var(--neon-green)" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
