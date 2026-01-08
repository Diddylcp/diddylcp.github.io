import { useEffect, useRef, useState } from "react";

function TechIcon({ icon, name, delay }) {
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`col-2 text-white text-center animate__animated ${
        visible ? "animate__fadeInUp" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <i className={`${icon} display-4`}></i>
      <p className="mt-2">{name}</p>
    </div>
  );
}

export default TechIcon;
