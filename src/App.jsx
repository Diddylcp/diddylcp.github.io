import { StrictMode } from "react";
import AboutMe from "./components/AboutMe.jsx";
import Header from "./components/Header.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";

export function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <section id="contact-me"></section>

      <button className="btn btn-primary justify-content-center">Prueba</button>
    </div>
  );
}
