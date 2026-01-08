import { useEffect, useRef, useState } from "react";
const TimelineItem = ({ titulo, empresa, fecha, descripcion, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item animate__animated ${
        visible ? "animate__fadeInUp" : ""
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="timeline-dot"></div>

      <div className="timeline-content card bg-dark text-light shadow">
        <div className="card-body">
          <h5 className="fw-bold text-warning">{titulo}</h5>

          {empresa && <h6 className="text-secondary">{empresa}</h6>}

          <small className="text-secondary">{fecha}</small>

          <p className="mt-3 text-justify mb-0">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
