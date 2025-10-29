"use client";
import { motion, type MotionProps } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "../ui/dialog";

const projects = [
  {
    title: "Vendor Discovery · Graph + Vector Search",
    summary:
      "Hybrid Neo4j embeddings + OpenSearch full-text; rank fusion; async ingestion with Lambda/SQS.",
    metrics: ["Relevance ↑60–70%", "P99 ↓45%", "10M+ docs"],
    tags: ["Neo4j","OpenSearch","Python","AWS"],
    links: { repo: "#", demo: "#" },
    caseStudy: {
      problem: "Sparse metadata & domain terminology lowered precision/recall.",
      solution: "Dual index (vector+keyword) with rerank; domain analyzers.",
      design: "Ingestion → embedding service → Neo4j; analyzers in OpenSearch.",
      results: "Big relevance lift and faster tail latencies.",
    }
  },
  {
    title: "Payments Terminal · Rule Engine",
    summary:
      "DB-event rules to auto-enable payment methods; outbox pattern; zero-downtime rollout.",
    metrics: ["Tickets ↓35%","P99 −50%","5% nation txns"],
    tags: ["Go","Laravel","MySQL","Kafka"],
    links: { repo: "#", demo: "#" },
  },
  {
    title: "S3 Orphan Cleanup · Glue Governance",
    summary:
      "Inventory & catalog snapshots, set-ops diff, Step Functions orchestration, manual review gates.",
    metrics: ["↓ Storage waste","↑ Discoverability","Guardrails"],
    tags: ["AWS Glue","S3","EMR","Python"],
    links: { repo: "#", demo: "#" },
  },
];

const fade: MotionProps = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5 }, 
  };
  
export default function Projects() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            {...fade}
            transition={{ ...fade.transition, delay: i * 0.04 }}
            className="group relative rounded-2xl border glass p-5 shadow-card"
            style={{ perspective: 1000 }}
          >
            <div className="transition-transform group-hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm">{p.summary}</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {p.tags.slice(0,3).map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <div key={m} className="rounded-lg border px-3 py-1.5 text-sm">
                    {m}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                {p.links.repo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.links.repo} target="_blank"><Github className="mr-1" /> Repo</a>
                  </Button>
                )}
                {p.links.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.links.demo} target="_blank"><Globe className="mr-1" /> Demo</a>
                  </Button>
                )}
                {p.caseStudy && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost">
                        Case Study <ArrowUpRight className="ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{p.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3 text-sm">
                        <p><b>Problem:</b> {p.caseStudy.problem}</p>
                        <p><b>Solution:</b> {p.caseStudy.solution}</p>
                        <p><b>Design:</b> {p.caseStudy.design}</p>
                        <p><b>Results:</b> {p.caseStudy.results}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
