import Button from "./Button";
import { useAnimateOnScroll } from "./Animator";

function AboutMe() {
  const about = useAnimateOnScroll("animate__fadeIn");
  return (
    <section
      id="about-me"
      ref={about.ref}
      className={`about-bg animate__animated ${
        about.visible ? about.animation : ""
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
            <p className="fs-5 mb-4 text-white">
              Amante de la tecnología, videojuegos y cultura japonesa desde muy
              joven. Soy un chico introvertido que aunque siempre se le han dado
              bien la vertiente de ciencias y tecnología, le han interesado el
              dibujo y la música. Una persona observadora, donde en el trabajo
              adopto una actitud seria, sistemática y práctica.
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
