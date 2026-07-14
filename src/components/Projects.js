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
    links: {
      live: "https://token-launchpad-frontend-two.vercel.app/dashboard",
      contract: "https://sepolia.etherscan.io/address/0xcb1452d0a8584eb661067853ED1A42926862779d",
      repo: "https://github.com/deepuallamsetty/token-launchpad-frontend",
    },
  },
  {
    name: "DeFi Staking Protocol",
    tagline: "Stake, accrue, and claim rewards on-chain",
    network: "Sepolia",
    status: "Deployed",
    stack: ["Solidity", "Foundry", "React", "Ethers.js"],
    detail:
      "Reward-per-token-stored staking contract, the same accounting pattern used by production protocols like Synthetix. Rewards accrue continuously without looping over stakers on-chain.",
    links: {
      live: null,
      contract: "https://sepolia.etherscan.io/address/0xD0987879F3d5220a2509b798fAD8EE888Ad5C674",
      repo: "https://github.com/deepuallamsetty/defi-staking-dapp",
    },
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
              {p.links.live && <a href={p.links.live} target="_blank" rel="noopener noreferrer">Live app →</a>}
              <a href={p.links.contract} target="_blank" rel="noopener noreferrer">Contract ↗</a>
              <a href={p.links.repo} target="_blank" rel="noopener noreferrer">Repo ↗</a>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
