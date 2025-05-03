import { useState } from "react";
import PropTypes from "prop-types";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="carousel">
        {images.length > 1 && (
          <button className="arrow left" onClick={prevSlide}>
            ◀
          </button>
        )}
        <div className="carousel-image-container" onClick={openModal}>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <p className="caption">{images[currentIndex].caption}</p>
        </div>
        {images.length > 1 && (
          <button className="arrow right" onClick={nextSlide}>
            ▶
          </button>
        )}
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="modal-image"
          />
        </div>
      )}
    </>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
};

export default ImageCarousel;
