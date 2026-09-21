import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../../types/listing';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import styles from './Lightbox.module.css';

interface LightboxProps {
  photos: Photo[];
  activePhotoIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  activePhotoIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useScrollLock(isOpen);
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);

  const handlePrev = () => {
    if (activePhotoIndex > 0) {
      onNavigate(activePhotoIndex - 1);
    } else {
      onNavigate(photos.length - 1); // wrap-around
    }
  };

  const handleNext = () => {
    if (activePhotoIndex < photos.length - 1) {
      onNavigate(activePhotoIndex + 1);
    } else {
      onNavigate(0); // wrap-around
    }
  };

  useKeyboardNavigation({
    onEscape: onClose,
    onArrowLeft: handlePrev,
    onArrowRight: handleNext,
    isActive: isOpen,
  });

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[activePhotoIndex] || photos[0];

  return (
    <div
      ref={containerRef}
      className={styles.lightboxOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Single photo lightbox viewer"
      tabIndex={-1}
    >
      {/* Top Controls Bar */}
      <header className={styles.topHeader}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close lightbox">
          <X size={20} />
          <span>Close</span>
        </button>

        <div className={styles.counter}>
          {activePhotoIndex + 1} / {photos.length}
        </div>
      </header>

      {/* Main Image Stage */}
      <main className={styles.mainStage}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="Previous photo (Left arrow)"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.imageFrame}>
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className={styles.activeImage}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80';
            }}
          />
          {currentPhoto.alt && <p className={styles.caption}>{currentPhoto.alt}</p>}
        </div>

        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next photo (Right arrow)"
        >
          <ChevronRight size={24} />
        </button>
      </main>
    </div>
  );
};
