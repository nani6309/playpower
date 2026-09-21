import React from 'react';
import { ListingData } from '../../types/listing';
import { ListingTitleHeader } from './ListingTitleHeader';
import { ListingGallery } from './ListingGallery';
import { ListingContent } from './ListingContent';
import { BookingCard } from './BookingCard';
import styles from './ListingPage.module.css';

interface ListingPageProps {
  listing: ListingData;
  onOpenPhotoTour: (initialPhotoIndex?: number) => void;
}

export const ListingPage: React.FC<ListingPageProps> = ({ listing, onOpenPhotoTour }) => {
  return (
    <div className={styles.listingPageWrapper}>
      {/* Title & Action Buttons */}
      <ListingTitleHeader listing={listing} onOpenPhotoTour={() => onOpenPhotoTour(0)} />

      {/* Hero 5-Image Grid */}
      <ListingGallery photos={listing.photos} onOpenPhotoTour={onOpenPhotoTour} />

      {/* Main Two-Column Layout */}
      <div className={styles.mainGrid}>
        {/* Left Column: Host, Details, Description, Amenities */}
        <ListingContent listing={listing} onOpenPhotoTour={() => onOpenPhotoTour(0)} />

        {/* Right Column: Sticky Booking Reserve Card */}
        <BookingCard price={listing.price} rating={listing.rating} />
      </div>
    </div>
  );
};
