"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const fade: any = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
};
const springy = { type: "spring", stiffness: 220, damping: 22 } as const;

export default function Hero() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[1.25fr,1fr]">
      <div>
        <motion.h1
          {...fade}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Shireen Meher
        </motion.h1>
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.06 }}
          className="mt-2 text-lg text-muted-foreground"
        >
          Backend & Distributed Systems Engineer
        </motion.p>
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.12 }}
          className="mt-4 max-w-2xl leading-relaxed"
        >
          I build reliable backends: search, graphs, and cloud-native data platforms.
          Neo4j • OpenSearch • AWS • K8s.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springy}
          className="mt-6 flex flex-wrap gap-3"
        >
          <Button asChild>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume <ArrowUpRight />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/your-handle" target="_blank">
              <Github /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/your-handle" target="_blank">
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="mailto:you@example.com">
              <Mail /> Contact
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Gradient blob avatar / diagram area */}
      <motion.div
        initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={springy}
        className="relative mx-auto h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-2xl border glass grid place-items-center"
      >
        <div className="absolute -inset-16 bg-gradient-to-br from-indigo-500/40 via-emerald-400/30 to-rose-500/40 blur-3xl" />
        <div className="relative z-10 text-sm text-center font-medium">
          Architecture Diagrams<br/>Graphs · Search · Pipelines
        </div>
      </motion.div>
    </div>
  );
}
