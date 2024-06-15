import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../assets/sass/components/_gallery.scss";

function Gallery({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="gallery">
      <img
        src={pictures[currentIndex]}
        alt={`${currentIndex + 1} / ${pictures.length} de ${title}`}
      />
      {pictures.length > 1 && (
        <div>
          <div className="chevrons">
            <FontAwesomeIcon
              className="arrow"
              icon={faChevronLeft}
              onClick={handlePrevious}
            />
            <FontAwesomeIcon
              className="arrow"
              icon={faChevronRight}
              onClick={handleNext}
            />
          </div>
          <p>
            {currentIndex + 1}/{pictures.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
