import { motion } from "motion/react";
import SectionLabel from "../components/SectionLabel";
import { portfolioData } from "../data/portfolioData";
import "./Skills.css";

const GROUP_LABELS = {
  programmingLanguages: "languages",
  frontend: "frontend",
  backend: "backend",
  databases: "databases",
  tools: "tools_&_devops",
  other: "ai_&_other",
};

function Skills() {
  const groups = Object.entries(portfolioData.skills).filter(
    ([, items]) => items && items.length > 0
  );

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionLabel tag="Skills" comment="languages, frameworks & tools" index="02" />

        <div className="skills__grid">
          {groups.map(([key, items], i) => (
            <motion.div
              key={key}
              className="skills__group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="skills__group-title">{GROUP_LABELS[key] || key}</h3>
              <div className="skills__tags">
                {items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
