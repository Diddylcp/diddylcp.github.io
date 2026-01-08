import { useEffect, useRef, useState } from "react";

function Card(props) {
  const { images, title, description, downloadUrl } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  const startAutoPlay = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (!images || images.length === 0) return;

    startAutoPlay();
    return () => stopAutoPlay();
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="col">
      <div
        className="card shadow-sm animate__animated animate__fadeIn"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        <div className="position-relative">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            className="card-img-top animate__animated animate__fadeIn  animate__faster"
            alt={title}
            height="225"
            style={{ objectFit: "cover" }}
          />

          <button
            className="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y"
            style={{ opacity: 0.7 }}
            onClick={prevImage}
          >
            ‹
          </button>

          <button
            className="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y"
            style={{ opacity: 0.7 }}
            onClick={nextImage}
          >
            ›
          </button>
        </div>

        <div className="card-body card-body-min-height d-flex flex-column">
          <h5>{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>

          <a
            href={downloadUrl}
            className="btn btn-sm btn-outline-secondary mt-auto"
            target="_blank"
            rel="noreferrer"
          >
            Ir al proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
