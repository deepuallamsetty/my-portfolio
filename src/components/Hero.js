import React from "react";

export default function Hero() {
  return (
    <header className="hero">
      <div className="eyebrow">Full Stack Developer → Web3</div>
      <h1 className="heroTitle display">
        Production backends, now shipped <em>on-chain</em>.
      </h1>
      <p className="heroSub">
        SDE-2 with 2+ years building NestJS and PostgreSQL systems at
        scale — now writing Solidity, deploying to Sepolia, and building
        the full stack around it: contract, indexer, and frontend, all
        wired together.
      </p>
      <div className="heroActions">
        <a className="btn btnPrimary" href="#work">
          View deployed work
        </a>
        <a className="btn btnGhost" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}
