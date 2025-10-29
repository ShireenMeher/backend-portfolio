"use client";
import { motion, type MotionProps } from "framer-motion";

const items = [
  {
    org: "Venwiz",
    role: "Software Engineer – Search/Graph",
    time: "2023–2024",
    bullets: [
      "Neo4j + OpenSearch hybrid search; rank fusion",
      "Async pipelines (Lambda/SQS/SNS), observability",
      "Maintained Neo4j; indexing, APOC, vector search",
    ],
  },
  {
    org: "Razorpay",
    role: "Backend Engineer – Terminals",
    time: "2021–2023",
    bullets: [
      "Rule-based method enablement; outbox pattern",
      "P99 latency −45–50%; 5% of India transactions",
      "Microservice extraction; dual-writes sunset",
    ],
  },
];

const fade: MotionProps = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5 }, 
  };
  
export default function Experience() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-6 relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-foreground/15" />
        <ul className="space-y-6">
          {items.map((it, i) => (
            <motion.li key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.05}} className="relative pl-10">
              <div className="absolute left-0 top-1.5 size-2.5 rounded-full bg-foreground/50" />
              <div className="rounded-xl glass p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{it.role} · {it.org}</div>
                  <div className="text-sm text-muted-foreground">{it.time}</div>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  {it.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
