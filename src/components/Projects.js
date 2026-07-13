import React from "react";
import Reveal from "./Reveal";
import VerifiedStamp from "./VerifiedStamp";

const projects = [
  {
    name: "Token Launchpad",
    tagline: "Deploy and index ERC-20 tokens end to end",
    network: "Sepolia",
    status: "Deployed",
    stack: ["Solidity", "Foundry", "NestJS", "TypeORM", "React"],
    detail:
      "TokenFactory contract with a Foundry test suite at full coverage. A NestJS indexer listens to on-chain events over an Alchemy websocket and writes them to PostgreSQL, so the frontend never queries the chain directly for history.",
    links: { live: "#", contract: "#", repo: "#" },
  },
  {
    name: "DeFi Staking Protocol",
    tagline: "Stake, accrue, and claim rewards on-chain",
    network: "Sepolia",
    status: "Deployed",
    stack: ["Solidity", "Foundry", "React", "Ethers.js"],
    detail:
      "Reward-per-token-stored staking contract, the same accounting pattern used by production protocols like Synthetix. Rewards accrue continuously without looping over stakers on-chain.",
    links: { live: "#", contract: "#", repo: "#" },
  },
];

export default function Projects() {
  return (
    <section id="work">
      <Reveal>
        <div className="sectionHead">
          <div>
            <div className="sectionLabel">02 — Deployed Work</div>
            <div className="sectionTitle display">Projects</div>
          </div>
        </div>
      </Reveal>

      {projects.map((p, i) => (
        <Reveal delay={i * 90} key={p.name}>
          <div className="projectCard">
            <div className="stampWrap">
              <VerifiedStamp size={78} />
            </div>
            <div className="projectTop">
              <div>
                <div className="projectName display">{p.name}</div>
                <div className="projectTagline">{p.tagline}</div>
              </div>
              <span className="statusPill mono">
                {p.status} · {p.network}
              </span>
            </div>
            <p className="projectDetail">{p.detail}</p>
            <div className="tagRow">
              {p.stack.map((t) => (
                <span className="tag mono" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="projectLinks">
              <a href={p.links.live}>Live app →</a>
              <a href={p.links.contract}>Contract ↗</a>
              <a href={p.links.repo}>Repo ↗</a>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
