import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="page">
      <Navbar />
      <div className="wrap">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
