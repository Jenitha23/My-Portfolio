import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const { socialLinks, personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {personal.name}. Built from scratch, deployed to the web.
        </p>

        <div className="footer__right">
          <div className="footer__social">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            )}
            {personal.email && (
              <a href={`mailto:${personal.email}`} aria-label="Email">
                <FiMail />
              </a>
            )}
          </div>

          <a href="#top" className="footer__top" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
