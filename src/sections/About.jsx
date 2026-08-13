import { motion } from "motion/react";
import SectionLabel from "../components/SectionLabel";
import { portfolioData } from "../data/portfolioData";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionLabel tag="About" comment="background & focus" index="01" />
        <motion.p
          className="about__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          {portfolioData.about.description}
        </motion.p>
      </div>
    </section>
  );
}

export default About;
