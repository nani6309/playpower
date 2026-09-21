import React, { useState } from 'react';
import { ArrowLeft, Share, Heart } from 'lucide-react';
import { ListingData, RoomCategory } from '../../types/listing';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import styles from './PhotoTour.module.css';

interface PhotoTourProps {
  listing: ListingData;
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (photoIndex: number) => void;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  listing,
  isOpen,
  onClose,
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<RoomCategory>('Living room 1');
  const [isSaved, setIsSaved] = useState(false);

  useScrollLock(isOpen);
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);

  useKeyboardNavigation({
    onEscape: onClose,
    isActive: isOpen,
  });

  if (!isOpen) return null;

  const scrollToSection = (categoryId: RoomCategory) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId.replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.photoTourOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo tour"
      tabIndex={-1}
    >
      {/* Top Fixed Bar */}
      <header className={styles.topHeader}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Back to listing page"
        >
          <ArrowLeft size={20} />
        </button>

        <div className={styles.headerActions}>
          <button className={styles.iconButton} aria-label="Share listing photos">
            <Share size={16} />
            <span>Share</span>
          </button>
          <button
            className={styles.iconButton}
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? 'Remove from saved' : 'Save photos'}
          >
            <Heart
              size={16}
              fill={isSaved ? 'var(--color-primary)' : 'none'}
              color={isSaved ? 'var(--color-primary)' : 'currentColor'}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </header>

      {/* Room Category Navigation Bar */}
      <nav className={styles.categoryNav} aria-label="Photo tour room navigation">
        {listing.roomCategories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.chip} ${activeCategory === cat.id ? styles.activeChip : ''}`}
            onClick={() => scrollToSection(cat.id)}
            aria-current={activeCategory === cat.id ? 'true' : undefined}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Main Stream of Room Photos */}
      <main className={styles.contentContainer}>
        {listing.roomCategories.map((cat) => {
          const categoryPhotos = listing.photos.filter((p) => p.category === cat.id);
          if (categoryPhotos.length === 0) return null;

          return (
            <section
              key={cat.id}
              id={`category-${cat.id.replace(/\s+/g, '-')}`}
              className={styles.roomSection}
            >
              <h2 className={styles.roomTitle}>{cat.label}</h2>
              {cat.description && <p className={styles.roomDesc}>{cat.description}</p>}

              <div className={styles.photoGrid}>
                {categoryPhotos.map((photo) => {
                  const globalIndex = listing.photos.findIndex((p) => p.id === photo.id);
                  return (
                    <div
                      key={photo.id}
                      className={styles.photoCard}
                      onClick={() => onOpenLightbox(globalIndex)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Open single photo view: ${photo.alt}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onOpenLightbox(globalIndex);
                        }
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className={styles.photoImage}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className={styles.photoOverlay} aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};
