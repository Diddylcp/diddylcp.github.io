import { StrictMode } from "react";
import AboutMe from "./components/AboutMe.jsx";
import Header from "./components/Header.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Footer from "./components/Footer.jsx";

export function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <Experiencia />
      <Footer />
    </div>
  );
}
