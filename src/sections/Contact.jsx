import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionLabel from "../components/SectionLabel";
import { portfolioData } from "../data/portfolioData";
import "./Contact.css";

// EmailJS credentials are read from environment variables — see .env.example.
// Never hardcode these directly in the source.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS env vars are missing. Add VITE_EMAILJS_SERVICE_ID, " +
          "VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to a .env file."
      );
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.SENDING);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus(STATUS.SUCCESS);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus(STATUS.ERROR);
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div>
          <SectionLabel tag="Contact" comment="let's talk" index="06" />
          <p className="contact__intro">
            Have an opportunity, a project, or just want to say hi? My inbox is open.
          </p>

          <div className="contact__links">
            {portfolioData.personal.email && (
              <a href={`mailto:${portfolioData.personal.email}`} className="contact__link">
                <FiMail /> {portfolioData.personal.email}
              </a>
            )}
            {portfolioData.socialLinks.github && (
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <FiGithub /> GitHub
              </a>
            )}
            {portfolioData.socialLinks.linkedin && (
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <FiLinkedin /> LinkedIn
              </a>
            )}
          </div>
        </div>

        <motion.form
          ref={formRef}
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <label>
            <span>Name</span>
            <input type="text" name="user_name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="user_email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit" className="btn btn--primary" disabled={status === STATUS.SENDING}>
            {status === STATUS.SENDING ? "Sending..." : "Send message"}
          </button>

          {status === STATUS.SUCCESS && (
            <p className="contact__status contact__status--success">
              Message sent — I'll get back to you soon.
            </p>
          )}
          {status === STATUS.ERROR && (
            <p className="contact__status contact__status--error">
              Something went wrong. Please try again, or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
