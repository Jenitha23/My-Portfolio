import { motion } from "motion/react";
import SectionLabel from "../components/SectionLabel";
import { portfolioData } from "../data/portfolioData";
import "./Experience.css";

// Renders nothing if the experience array in portfolioData is empty —
// add entries there and this section appears automatically.
function Experience() {
  const { experience } = portfolioData;
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionLabel tag="Experience" comment="internships & work" index="03" />
        <ul className="experience__list">
          {experience.map((role, i) => (
            <motion.li
              key={role.company + role.title}
              className="experience__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="experience__item-head">
                <h3>{role.title}</h3>
                <span className="tag">{role.period}</span>
              </div>
              <p className="experience__company">{role.company}</p>
              <p className="experience__desc">{role.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
