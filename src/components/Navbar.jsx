import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const initials = portfolioData.personal.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-mark">{initials}</span>
        </a>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
