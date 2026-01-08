import Button from "./Button";
import { useAnimateOnScroll } from "./Animator";

function AboutMe() {
  const about = useAnimateOnScroll("animate__fadeIn");
  return (
    <section
      id="about-me"
      ref={about.ref}
      className={`about-bg animate__animated ${
        about.visible ? about.animation + " is-visible" : "is-hidden"
      }`}
    >
      <div className=" text-secondary px-4 py-5 text-center vh-100 d-flex align-items-center justify-content-center ">
        <div className="py-5 bg-dark p-2 text-dark bg-opacity-75  rounded">
          <h1 className="display-5 fw-bold text-white pt-5">
            Borja Tapia Fernández
          </h1>
          <h2 className="display-5 fw-light fs-1 text-warning">
            Programador Web y de Videojuegos
          </h2>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white text-justify">
              Amante de la tecnología, videojuegos y cultura japonesa desde muy
              joven. Me considero una persona responsable y muy motivada para
              poder crecer profesionalmente, con ganas de iniciar mi carrera
              como programador full-stack. Afronto este camino con ilusión y
              compromiso, con el objetivo de demostrar mi capacidad para
              aprender, adaptarme y afrontar con éxito todo tipo de retos en un
              sector tan dinámico como el tecnológico.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/Curriculum Vitae Borja Tapia.pdf" download>
                <Button
                  styleName="btn btn-outline-warning btn-lg px-4 me-sm-3 fw-bold"
                  text="Descargar CV"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
