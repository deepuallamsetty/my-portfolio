import React from "react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact">
      <Reveal>
        <div className="signCol">
          <h3 className="display">Contact</h3>
          <p>Open to full-stack and smart contract developer roles.</p>
          <div className="contactLinks">
            <a href="mailto:you@example.com">Email</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
