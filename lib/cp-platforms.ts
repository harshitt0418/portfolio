/** Competitive programming profiles — update stats when your ratings change */
export type CPStat = { label: string; value: string }

export type CPPlatform = {
  id: string
  name: string
  handle: string
  url: string
  description: string
  stats: CPStat[]
  /** Tailwind classes (literal strings so they are not purged) */
  borderClass: string
  badgeBgClass: string
  accentTextClass: string
  hoverShadowClass: string
}

export const competitiveProgrammingPlatforms: CPPlatform[] = [
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "harshit_0418",
    url: "https://leetcode.com/u/harshit_0418/",
    description: "Data structures, algorithms & contest practice",
    stats: [
      { label: "Rating", value: "1,652" },
      { label: "Ranking", value: "Top 17.32%" },
      { label: "Problems solved", value: "220" },
    ],
    borderClass: "border-amber-500/40 hover:border-amber-400/70",
    badgeBgClass: "bg-amber-500/15",
    accentTextClass: "text-amber-400",
    hoverShadowClass: "hover:shadow-[0_0_32px_rgba(251,191,36,0.18)]",
  },
  {
    id: "codeforces",
    name: "Codeforces",
    handle: "harshitt__0418",
    url: "https://codeforces.com/profile/harshitt__0418",
    description: "Rated contests & problem-solving",
    stats: [
      { label: "Rating", value: "984" },
      { label: "Max rating", value: "1,124" },
      { label: "Problems solved", value: "190" },
    ],
    borderClass: "border-sky-500/40 hover:border-sky-400/70",
    badgeBgClass: "bg-sky-500/15",
    accentTextClass: "text-sky-400",
    hoverShadowClass: "hover:shadow-[0_0_32px_rgba(56,189,248,0.18)]",
  },
  {
    id: "codechef",
    name: "CodeChef",
    handle: "harshitt_0418",
    url: "https://www.codechef.com/users/harshitt_0418",
    description: "Long challenges & cook-offs",
    stats: [
      { label: "Stars", value: "2 ★" },
      { label: "Rating", value: "1,470" },
      { label: "Problems solved", value: "62" },
    ],
    borderClass: "border-lime-500/35 hover:border-lime-400/65",
    badgeBgClass: "bg-lime-500/12",
    accentTextClass: "text-lime-400",
    hoverShadowClass: "hover:shadow-[0_0_32px_rgba(163,230,53,0.15)]",
  },
]
