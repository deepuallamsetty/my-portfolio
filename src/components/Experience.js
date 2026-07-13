import React from "react";
import Reveal from "./Reveal";

const experience = [
  {
    role: "Full Stack Developer, SDE-2",
    org: "Navneet Toptech",
    period: "2+ years",
    detail:
      "Built and optimized backend services for an educational platform on NestJS, TypeORM, and PostgreSQL across multiple microservices, including bulk data pipelines on AWS Lambda and multi-tenant query performance work.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <div className="sectionHead">
          <div>
            <div className="sectionLabel">03 — Experience</div>
            <div className="sectionTitle display">Experience</div>
          </div>
        </div>
      </Reveal>

      {experience.map((e) => (
        <Reveal key={e.org}>
          <div className="expRow">
            <div className="expPeriod mono">{e.period}</div>
            <div>
              <div className="expRole">{e.role}</div>
              <div className="expOrg mono">{e.org}</div>
              <p className="expDetail">{e.detail}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
