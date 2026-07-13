import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navInner">
        <span className="navName">Venkatadeepika Allamsetty</span>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
