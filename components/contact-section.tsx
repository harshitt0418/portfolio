"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Clock, Check, ExternalLink } from "lucide-react"

const CONTACT_EMAIL = "hmittal0418@gmail.com"

/** Opens compose in the Gmail session that matches `senderEmail` (multi-account). */
function buildGmailComposeUrl(name: string, senderEmail: string, message: string) {
  const trimmedName = name.trim()
  const trimmedSender = senderEmail.trim()
  const subject = `Portfolio contact from ${trimmedName || "visitor"}`
  const body = `Name: ${trimmedName}
Email: ${trimmedSender}

Message:
${message.trim()}`
  const params = new URLSearchParams({
    to: CONTACT_EMAIL,
    su: subject,
    body,
    tf: "cm",
  })
  const accountPath = encodeURIComponent(trimmedSender)
  return `https://mail.google.com/mail/u/${accountPath}/?${params.toString()}`
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState<"idle" | "success">("idle")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "// Contact terminal initialized",
    "// Fill the form — Gmail opens using the address you enter in $ email:",
  ])

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedMessage = message.trim()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedMessage) return
    if (!trimmedName || !trimmedEmail) return

    const gmailUrl = buildGmailComposeUrl(trimmedName, trimmedEmail, trimmedMessage)
    const opened = window.open(gmailUrl, "_blank", "noopener,noreferrer")
    if (!opened) {
      window.location.href = gmailUrl
    }

    setTerminalOutput((prev) => [
      ...prev,
      "",
      `> name: ${trimmedName}`,
      `> email: ${trimmedEmail}`,
      `> message: ${trimmedMessage.split("\n").join("\n> ")}`,
      "",
      `// Opened Gmail as ${trimmedEmail} — review the draft and press Send`,
    ])
    setName("")
    setEmail("")
    setMessage("")
    setFormState("success")

    setTimeout(() => {
      setFormState("idle")
    }, 4000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, India",
      href: "#",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open to opportunities",
      href: "#",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-neon-green">
            {"// 05. GET_IN_TOUCH"}
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            {"Let's"} Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or looking to collaborate? {"I'm"} always open to
            discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Terminal-style contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass overflow-hidden rounded-xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border bg-card/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 font-mono text-sm text-muted-foreground">
                  contact_form.sh
                </span>
              </div>

              {/* Terminal body */}
              <div className="scanlines relative p-6">
                <div className="mb-4 space-y-2 font-mono text-sm">
                  {terminalOutput.map((line, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={
                        line.startsWith("//")
                          ? "text-muted-foreground"
                          : line.startsWith(">")
                          ? "text-neon-cyan"
                          : line.includes("received")
                          ? "text-neon-green"
                          : "text-foreground"
                      }
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <form onSubmit={handleTerminalSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="mb-2 block font-mono text-sm text-neon-green">
                      $ name:
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 font-mono text-sm outline-none transition-colors focus:border-neon-green"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="mb-2 block font-mono text-sm text-neon-green">
                      $ email:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 font-mono text-sm outline-none transition-colors focus:border-neon-green"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="mb-2 block font-mono text-sm text-neon-green">
                      $ message:
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-border bg-card/50 px-4 py-3 font-mono text-sm outline-none transition-colors focus:border-neon-green"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="cursor-hover group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-neon-green px-6 py-4 font-semibold text-background transition-all hover:shadow-[0_0_30px_var(--neon-green)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formState === "idle" && (
                      <>
                        <ExternalLink className="h-5 w-5" />
                        Open in Gmail & send
                      </>
                    )}
                    {formState === "success" && (
                      <>
                        <Check className="h-5 w-5" />
                        Check Gmail — then hit Send
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 font-mono text-sm text-muted-foreground">
                {"// CONTACT_INFO"}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="glass cursor-hover flex items-center gap-4 rounded-xl p-4 transition-all hover:border-neon-green/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="rounded-lg bg-neon-green/20 p-3">
                      <item.icon className="h-5 w-5 text-neon-green" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              className="glass rounded-xl p-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  className="h-3 w-3 rounded-full bg-neon-green"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ boxShadow: "0 0 10px var(--neon-green)" }}
                />
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-muted-foreground">
                {"I'm"} actively looking for internship and collaboration opportunities.
                Whether you have a project idea or just want to connect, feel free to reach out!
              </p>
            </motion.div>

            {/* Quick response */}
            <motion.div
              className="font-mono text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p>{"// Typical response time: < 24 hours"}</p>
              <p>{"// Preferred: Email or LinkedIn"}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
