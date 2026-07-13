import React from "react";
import Reveal from "./Reveal";

const skills = {
  core: [
    { name: "NestJS", note: "backend framework" },
    { name: "TypeORM", note: "ORM / PostgreSQL" },
    { name: "PostgreSQL", note: "database" },
    { name: "React", note: "frontend" },
    { name: "AWS (S3, SQS, Lambda)", note: "infra" },
  ],
  chain: [
    { name: "Solidity", note: "smart contracts" },
    { name: "Foundry", note: "testing / fuzzing" },
    { name: "ERC-20 / 721 / 1155", note: "token standards" },
    { name: "Ethers.js", note: "chain integration" },
    { name: "Ethernaut", note: "20 / 20 completed" },
  ],
};

const ethernautHighlights = [
  { n: "10", label: "Re-entrancy" },
  { n: "16", label: "Preservation (delegatecall)" },
  { n: "20", label: "Denial" },
  { n: "24", label: "Puzzle Wallet" },
];

export default function Skills() {
  return (
    <section id="skills">
      <Reveal>
        <div className="sectionHead">
          <div>
            <div className="sectionLabel">01 — Verified Skills</div>
            <div className="sectionTitle display">What I build with</div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="ledgerGroup">
          <div className="ledgerGroupTitle">Core stack</div>
          {skills.core.map((s) => (
            <div className="ledgerRow" key={s.name}>
              <span className="ledgerName">{s.name}</span>
              <span className="ledgerNote mono">{s.note}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="ledgerGroup">
          <div className="ledgerGroupTitle">Blockchain</div>
          {skills.chain.map((s) => (
            <div className="ledgerRow" key={s.name}>
              <span className="ledgerName">{s.name}</span>
              <span className="ledgerNote mono">{s.note}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="auditBar">
          <div className="auditTop">
            <span className="sectionLabel">Ethernaut audit trail</span>
            <span className="auditCount">20 / 20</span>
          </div>
          <div className="track">
            <div className="trackFill" />
          </div>
          <div className="auditGrid">
            {ethernautHighlights.map((e) => (
              <div className="auditItem mono" key={e.n}>
                <b>#{e.n}</b> {e.label}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
