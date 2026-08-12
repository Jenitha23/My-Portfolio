import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "./Hero.css";

const { name, role, tagline } = portfolioData.personal;

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__schema"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero__schema-line">
            <span className="hero__punct">const</span> profile <span className="hero__punct">=</span> {"{"}
          </span>
          <span className="hero__schema-line hero__schema-indent">
            name: <span className="hero__string">"{name}"</span>,
          </span>
          <span className="hero__schema-line hero__schema-indent">
            role: <span className="hero__string">"{role}"</span>,
          </span>
          <span className="hero__schema-line hero__schema-indent">
            status: <span className="hero__string">"open_to_internships"</span>,
          </span>
          <span className="hero__schema-line">{"}"}</span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn--primary">
            View projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;
