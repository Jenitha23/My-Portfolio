import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionLabel from "../components/SectionLabel";
import { portfolioData } from "../data/portfolioData";
import "./Projects.css";

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionLabel tag="Projects" comment={`${projects.length} shipped`} index="04" />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <div className="project-card__head">
                <h3>{project.title}</h3>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} repository`}
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
