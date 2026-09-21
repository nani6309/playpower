import React from 'react';
import { Grid } from 'lucide-react';
import { Photo } from '../../types/listing';
import styles from './ListingGallery.module.css';

interface ListingGalleryProps {
  photos: Photo[];
  onOpenPhotoTour: (initialPhotoIndex?: number) => void;
}

export const ListingGallery: React.FC<ListingGalleryProps> = ({ photos, onOpenPhotoTour }) => {
  const heroPhotos = photos.filter((p) => p.isHero).slice(0, 5);
  const mainPhoto = heroPhotos.find((p) => p.heroPosition === 'main') || heroPhotos[0];
  const auxPhotos = heroPhotos.filter((p) => p.id !== mainPhoto.id).slice(0, 4);

  return (
    <div className={styles.galleryContainer} aria-label="Photo gallery preview">
      {/* Large Main Hero Image */}
      {mainPhoto && (
        <div
          className={styles.mainHeroFrame}
          onClick={() => onOpenPhotoTour(photos.findIndex((p) => p.id === mainPhoto.id))}
          role="button"
          tabIndex={0}
          aria-label={`View photo 1 of ${photos.length}: ${mainPhoto.alt}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenPhotoTour(photos.findIndex((p) => p.id === mainPhoto.id));
            }
          }}
        >
          <img
            src={mainPhoto.src}
            alt={mainPhoto.alt}
            className={styles.galleryImage}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
        </div>
      )}

      {/* 2x2 Auxiliary Grid */}
      <div className={styles.auxiliaryGrid}>
        {auxPhotos.map((photo, index) => {
          const globalIndex = photos.findIndex((p) => p.id === photo.id);
          return (
            <div
              key={photo.id}
              className={styles.auxiliaryFrame}
              onClick={() => onOpenPhotoTour(globalIndex)}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${globalIndex + 1} of ${photos.length}: ${photo.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenPhotoTour(globalIndex);
                }
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.galleryImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
            </div>
          );
        })}
      </div>

      {/* Show All Photos Action Button */}
      <button
        className={styles.showAllPhotosButton}
        onClick={() => onOpenPhotoTour(0)}
        aria-label="Show all 18 photos"
      >
        <Grid size={16} />
        <span>Show all photos</span>
      </button>
    </div>
  );
};
