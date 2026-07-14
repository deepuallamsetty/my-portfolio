import React from "react";
import Reveal from "./Reveal";

const experience = [
  {
    role: "Fullstack Developer (SDE-2)",
    org: "Navneet Toptech",
    location: "Bengaluru, India",
    period: "Oct 2024 – Present",
    bullets: [
      "Architected and built scalable RESTful APIs using Node.js and NestJS for two core platforms — a Template Management System and an Admission Management System — including data models, business logic, and API endpoints.",
      "Implemented role-based access control (RBAC) to manage data permissions across administrators, teachers, and parents.",
      "Optimized PostgreSQL and MongoDB queries, reducing database response times and improving overall application throughput.",
      "Applied NestJS modular architecture using guards, interceptors, and service modules to ensure long-term maintainability and scalability.",
    ],
  },
  {
    role: "Backend Integration Engineer",
    org: "Apexon",
    location: "Bengaluru, India",
    period: "Feb 2024 – Sep 2024",
    bullets: [
      "Developed the Node.js API integration layer for an internal tool enabling automated code translation between programming languages via ChatGPT APIs.",
      "Managed API request/response cycles with robust async/await patterns, edge case handling, and error management.",
      "Collaborated with backend engineers to define and enforce API contracts and consistent data schemas across services.",
    ],
  },
  {
    role: "Backend Developer Intern",
    org: "Greendzine Technologies",
    location: "Bengaluru, India",
    period: "Aug 2023 – Jan 2024",
    bullets: [
      "Audited and optimized Node.js backend services, eliminating redundant API calls and improving data-fetching performance and reliability.",
    ],
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
              <div className="expOrg mono">
                {e.org} · {e.location}
              </div>
              <ul className="expBullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
