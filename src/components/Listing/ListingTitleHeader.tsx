import React, { useState } from 'react';
import { Star, Share, Heart } from 'lucide-react';
import { ListingData } from '../../types/listing';
import styles from './ListingTitleHeader.module.css';

interface ListingTitleHeaderProps {
  listing: ListingData;
  onOpenPhotoTour: () => void;
}

export const ListingTitleHeader: React.FC<ListingTitleHeaderProps> = ({ listing }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className={styles.titleHeaderContainer}>
      <h1 className={styles.title}>{listing.title}</h1>
      <div className={styles.actionRow}>
        <div className={styles.metaGroup}>
          <Star size={14} className={styles.starIcon} />
          <span className={styles.ratingScore}>{listing.rating.score.toFixed(2)}</span>
          <span className={styles.bullet}>·</span>
          <a href="#reviews" className={styles.reviewsLink}>
            {listing.rating.reviewCount} reviews
          </a>
          <span className={styles.bullet}>·</span>
          {listing.host.isSuperhost && (
            <>
              <span>Superhost</span>
              <span className={styles.bullet}>·</span>
            </>
          )}
          <a href="#location" className={styles.locationLink}>
            {listing.location}
          </a>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.actionButton} aria-label="Share this listing">
            <Share size={16} />
            <span>Share</span>
          </button>
          <button
            className={styles.actionButton}
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? 'Remove from saved wishlist' : 'Save to wishlist'}
          >
            <Heart
              size={16}
              fill={isSaved ? 'var(--color-primary)' : 'none'}
              color={isSaved ? 'var(--color-primary)' : 'currentColor'}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
