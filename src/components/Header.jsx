import { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("about-me");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container navbar-expand-lg navbar-dark fixed-top bg-dark ">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M249.2 159.2H773v75.4H249.2zM253 789h520.1v75.4H253zM119.2 308.7h66.9v405.8h-66.9zM839.9 308.7h66.9v405.8h-66.9z"
              fill="#f0d03f"
            />
            <path
              d="M186.1 234.6H253V310h-66.9zM706.2 549.5v72H319.8v-72H253v75.4h66.8v72h386.4v-72H773v-75.4zM186.1 713.6H253V789h-66.9zM349.5 335.6h66.9V411h-66.9zM609.6 335.6h66.9V411h-66.9zM773 234.6h66.9V310H773zM773 713.6h66.9V789H773zM947.6 411h66.9v75.4h-66.9zM947.6 536.7h66.9v75.4h-66.9zM11.5 411h66.9v75.4H11.5zM11.5 536.7h66.9v75.4H11.5z"
              fill="#f0d03f"
            />
          </svg>
          <span className="fs-4 mx-2 text-primary">Borja Tapia</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="#about-me"
              className={`nav-link ${
                activeSection === "about-me" ? "active text-black" : ""
              }`}
              aria-current="page"
            >
              Sobre mi
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#technologies"
              className={`nav-link ${
                activeSection === "technologies" ? "active text-black" : ""
              }`}
            >
              Tecnologias
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className={`nav-link ${
                activeSection === "projects" ? "active text-black" : ""
              }`}
            >
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              className={`nav-link ${
                activeSection === "experience" ? "active text-black" : ""
              }`}
            >
              Experiencia
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact-me"
              className={`nav-link ${
                activeSection === "contact-me" ? "active text-black" : ""
              }`}
            >
              Contactame
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
