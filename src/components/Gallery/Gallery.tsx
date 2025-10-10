import { useState } from 'react';
import styles from './Gallery.module.scss';

type GalleryProps = {
  pictures: string[];
};

function Gallery({ pictures }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  function handleNext() {
    setDirection('right');
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    setDirection('left');
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  if (!pictures || pictures.length === 0) {
    return (
      <div className={styles.gallery}>
        <p>Aucune image disponible</p>
      </div>
    );
  }

  const showControls = pictures.length > 1;

  return (
    <div className={styles.gallery}>
      {showControls && (
        <button onClick={handlePrev} className={styles.arrowLeft}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <img
        src={pictures[currentIndex]}
        alt="Photo du logement"
        className={`${styles.image} ${direction === 'left' ? styles.slideLeft : ''} ${direction === 'right' ? styles.slideRight : ''}`}
        onAnimationEnd={() => setDirection(null)}
      />

      {showControls && (
        <button onClick={handleNext} className={styles.arrowRight}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

      {showControls && (
        <p className={styles.counter}>
          {currentIndex + 1} / {pictures.length}
        </p>
      )}
    </div>
  );
}

export default Gallery;
