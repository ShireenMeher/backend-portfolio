"use client";
import { Badge } from "../ui/badge";

const stack = [
  "Go","Java","Python","Node.js","PostgreSQL","MongoDB","Neo4j",
  "OpenSearch","Redis","Kafka","AWS Lambda","SQS","SNS","S3","Glue",
  "Docker","Kubernetes","gRPC","REST","OpenAPI","CI/CD","Observability"
];

export default function TechMarquee() {
  return (
    <div className="glass rounded-2xl px-3 py-3">
      <div className="marquee">
        <div className="marquee-track">
          {[...stack, ...stack].map((s, i) => (
            <Badge key={i} variant="secondary">{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
