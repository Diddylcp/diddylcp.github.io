import React from "react";
import { useAnimateOnScroll } from "./Animator";
import TimelineItem from "./TimelineItem";
import "../css/Experiencia.css";

const experiencias = [
  {
    titulo: "Coordinador de la sala de emergencia del 112 de Cataluña",
    empresa: "CAT112",
    fecha: "Junio 2017 - Actualidad",
    descripcion:
      "Con 19 años, empecé a trabajar en el centro de emergencias del 112 de Cataluña. Es ahí que con los años he aprendido a tener una toma de decisiones rápida y eficaz en situaciones inesperadas. Gracias a ello, con el tiempo y esfuerzo, fui asumiendo nuevas funciones hasta llegar a la actualidad. A dia de hoy soy coordinador de la sala y además de resolver las dudas que aparezcan al personal de la sala durante su turno, también me encargo de la formación de nuevos empleados y controlo la calidad de la gestión de un grupo de trabajadores.",
  },
  {
    titulo: "Auxiliar administrativo",
    empresa: "Dixit, Centre d'idiomes",
    fecha: "Septiembre 2013 - Junio 2016",
    descripcion:
      "A los 16 años, durante la temporada escolar, se me ofreció ir 1 dia a la semana a la academia extraescolar donde aprendia inglés, para ayudar en tareas administrativas y de contabilidad, así como soporte a profesores y alumnos en clases de inglés.",
  },
  {
    titulo: "Auxiliar administrativo",
    empresa: "Limpiezas Roses Costa Brava S.L.",
    fecha: "Junio 2014 - Agosto 2016 (Durante verano)",
    descripcion:
      "Desde los 16 años, empecé a trabajar en verano para poder tener mis propios ahorros, es ahí cuando ayudé en tareas administrativas y de contabilidad, gestión de facturas, atención al cliente y gestión de equipos de trabajo, en una empresa local de la localidad de Roses.",
  },
];

function Experiencia() {
  const experience = useAnimateOnScroll("animate__fadeInRight");

  return (
    <section
      id="experience"
      ref={experience.ref}
      className={`container justify-content-center align-items-center animate__animated py-5 ${
        experience.visible ? experience.animation + " is-visible" : "is-hidden"
      }`}
    >
      <h2 className="mb-5 fw-bold animate__animated animate__fadeInLeft text-center text-light">
        Experiencia
      </h2>

      <div className="timeline">
        {experiencias.map((exp, index) => (
          <TimelineItem
            key={index}
            titulo={exp.titulo}
            empresa={exp.empresa}
            fecha={exp.fecha}
            descripcion={exp.descripcion}
            delay={`${index * 0.2}s`}
          />
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
