import { motion } from "motion/react";
import SectionLabel from "../components/SectionLabel";
import { portfolioData } from "../data/portfolioData";
import "./Education.css";

function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section education">
      <div className="container education__grid">
        <div>
          <SectionLabel tag="Education" comment="degree & coursework" index="05" />
          <ul className="education__list">
            {education.map((item, i) => (
              <motion.li
                key={item.institution + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h3>{item.degree}</h3>
                <p className="education__meta">{item.institution}</p>
                <span className="tag">{item.period}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {certifications.length > 0 && (
          <div>
            <SectionLabel tag="Certifications" comment="issued & in progress" />
            <ul className="education__list">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert.title + i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h3>{cert.title}</h3>
                  <p className="education__meta">{cert.issuer}</p>
                  <span className="tag">{cert.date}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;
