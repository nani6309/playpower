import React from 'react';
import {
  Star,
  MapPin,
  Key,
  Wifi,
  Bath,
  Wind,
  Waves,
  Tv,
  Car,
  Dumbbell,
  Utensils,
  Sparkles,
  ShieldCheck,
  BedDouble,
  Tag,
} from 'lucide-react';
import { ListingData } from '../../types/listing';
import styles from './ListingContent.module.css';

interface ListingContentProps {
  listing: ListingData;
  onOpenPhotoTour: () => void;
}

const getAmenityIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wifi':
      return <Wifi size={24} />;
    case 'Bath':
      return <Bath size={24} />;
    case 'Wind':
      return <Wind size={24} />;
    case 'Waves':
      return <Waves size={24} />;
    case 'Tv':
      return <Tv size={24} />;
    case 'Car':
      return <Car size={24} />;
    case 'Dumbbell':
      return <Dumbbell size={24} />;
    case 'Utensils':
      return <Utensils size={24} />;
    case 'Sparkles':
      return <Sparkles size={24} />;
    case 'ShieldCheck':
      return <ShieldCheck size={24} />;
    default:
      return <Sparkles size={24} />;
  }
};

const getHighlightIcon = (iconName: string) => {
  switch (iconName) {
    case 'Star':
      return <Star size={24} className={styles.highlightIcon} />;
    case 'MapPin':
      return <MapPin size={24} className={styles.highlightIcon} />;
    case 'Key':
      return <Key size={24} className={styles.highlightIcon} />;
    default:
      return <Star size={24} className={styles.highlightIcon} />;
  }
};

export const ListingContent: React.FC<ListingContentProps> = ({ listing, onOpenPhotoTour }) => {
  return (
    <div className={styles.contentContainer}>
      {/* Host Header Section */}
      <div className={styles.hostHeaderRow}>
        <div>
          <h2 className={styles.hostTitle}>
            {listing.propertyType} hosted by {listing.host.name}
          </h2>
          <p className={styles.hostSubtitle}>
            {listing.guestCount} guests · {listing.bedroomCount} bedroom · {listing.bedCount} bed ·{' '}
            {listing.bathroomCount} bathroom
          </p>
        </div>
        <img
          src={listing.host.avatar}
          alt={listing.host.name}
          className={styles.hostAvatar}
        />
      </div>

      {/* Promotional Claim Card Banner */}
      <div className={styles.promoCard} role="region" aria-label="Special offer">
        <div className={styles.promoTextGroup}>
          <Tag size={20} color="var(--color-primary)" />
          <span className={styles.promoTitle}>Get 10% off your next stay</span>
        </div>
        <button className={styles.promoClaimButton} aria-label="Claim 10% discount">
          Claim
        </button>
      </div>

      {/* Highlight Badges */}
      <div className={styles.highlightsSection}>
        {listing.highlights.map((h) => (
          <div key={h.id} className={styles.highlightRow}>
            {getHighlightIcon(h.icon)}
            <div>
              <h3 className={styles.highlightTitle}>{h.title}</h3>
              <p className={styles.highlightDesc}>{h.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Property Overview Description */}
      <div className={styles.descriptionSection}>
        <h2 className={styles.sectionHeading}>About this place</h2>
        <p className={styles.descriptionText}>{listing.description}</p>
      </div>

      {/* Sleeping Arrangements */}
      <div className={styles.sleepingSection}>
        <h2 className={styles.sectionHeading}>Where you'll sleep</h2>
        <div className={styles.sleepingGrid}>
          {listing.sleepingArrangements.map((item, index) => (
            <div key={index} className={styles.sleepingCard}>
              <BedDouble size={24} />
              <h3 className={styles.sleepingTitle}>{item.roomName}</h3>
              <p className={styles.sleepingSub}>{item.bedType}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className={styles.amenitiesSection}>
        <h2 className={styles.sectionHeading}>What this place offers</h2>
        <div className={styles.amenitiesGrid}>
          {listing.amenities.slice(0, 10).map((amenity) => (
            <div key={amenity.id} className={styles.amenityItem}>
              {getAmenityIcon(amenity.icon)}
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
        <button
          className={styles.showAllAmenitiesButton}
          onClick={onOpenPhotoTour}
          aria-label="Show all 32 amenities"
        >
          Show all 32 amenities
        </button>
      </div>
    </div>
  );
};
