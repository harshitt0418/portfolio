"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Trophy } from "lucide-react"
import { competitiveProgrammingPlatforms } from "@/lib/cp-platforms"

export function CompetitiveProgrammingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="cp"
      className="relative min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-neon-green">
            {"// 03. COMPETITIVE_PROGRAMMING"}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Competitive Programming
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ratings and solve counts where I track them on-platform; each card
            links to my public profile so you can verify live stats.
          </p>
          <p className="mt-3 font-mono text-sm text-muted-foreground">
            {"// 500+ problems solved across platforms (total)"}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competitiveProgrammingPlatforms.map((platform, index) => (
            <motion.a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass cursor-hover group flex h-full flex-col rounded-xl border-2 p-6 transition-all duration-300 ${platform.borderClass} ${platform.hoverShadowClass}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <div
                    className={`mb-2 inline-flex items-center gap-2 rounded-lg px-2.5 py-1 font-mono text-xs ${platform.badgeBgClass} ${platform.accentTextClass}`}
                  >
                    <Trophy className="h-3.5 w-3.5" aria-hidden />
                    {platform.name}
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    @{platform.handle}
                  </p>
                </div>
                <ExternalLink
                  className={`h-5 w-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100 ${platform.accentTextClass}`}
                  aria-hidden
                />
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {platform.description}
              </p>

              <dl className="mt-auto space-y-3 border-t border-border pt-4">
                {platform.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 font-mono text-sm"
                  >
                    <dt className="text-muted-foreground">{stat.label}</dt>
                    <dd className={`text-right font-semibold ${platform.accentTextClass}`}>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground group-hover:text-foreground">
                Open profile
                <span className={`transition-transform group-hover:translate-x-0.5 ${platform.accentTextClass}`}>
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
