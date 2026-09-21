import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { PriceBreakdown, RatingSummary } from '../../types/listing';
import styles from './BookingCard.module.css';

interface BookingCardProps {
  price: PriceBreakdown;
  rating: RatingSummary;
}

export const BookingCard: React.FC<BookingCardProps> = ({ price, rating }) => {
  const [nights] = useState(5);
  const [guestCount] = useState(2);

  const basePriceTotal = price.pricePerNight * nights;
  const grandTotal = basePriceTotal + price.cleaningFee + price.serviceFee;

  return (
    <aside className={styles.bookingCard} aria-label="Booking reservation module">
      {/* Header Price & Rating */}
      <div className={styles.priceHeader}>
        <div>
          <span className={styles.priceText}>
            {price.currencySymbol}
            {price.pricePerNight.toLocaleString('en-IN')}
          </span>
          <span className={styles.pricePerNight}> night</span>
        </div>
        <div className={styles.ratingSummary}>
          <Star size={12} className={styles.starIcon} />
          <span className={styles.ratingScore}>{rating.score.toFixed(2)}</span>
          <span className={styles.reviewCount}>({rating.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Date & Guest Input Form */}
      <div className={styles.selectorContainer}>
        <div className={styles.dateRow}>
          <div className={styles.dateBox} tabIndex={0} role="button" aria-label="Check-in date">
            <span className={styles.boxLabel}>CHECK-IN</span>
            <span className={styles.boxValue}>10/24/2026</span>
          </div>
          <div className={styles.dateBox} tabIndex={0} role="button" aria-label="Checkout date">
            <span className={styles.boxLabel}>CHECKOUT</span>
            <span className={styles.boxValue}>10/29/2026</span>
          </div>
        </div>
        <div className={styles.guestBox} tabIndex={0} role="button" aria-label="Select guests">
          <div>
            <span className={styles.boxLabel}>GUESTS</span>
            <span className={styles.boxValue}>{guestCount} guests</span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Reserve CTA */}
      <button className={styles.reserveButton} aria-label="Reserve this apartment">
        Reserve
      </button>

      <p className={styles.reserveNotice}>You won't be charged yet</p>

      {/* Price Itemization Breakdown */}
      <div className={styles.breakdownSection}>
        <div className={styles.breakdownRow}>
          <span className={styles.breakdownLabel}>
            {price.currencySymbol}
            {price.pricePerNight.toLocaleString('en-IN')} x {nights} nights
          </span>
          <span>
            {price.currencySymbol}
            {basePriceTotal.toLocaleString('en-IN')}
          </span>
        </div>

        <div className={styles.breakdownRow}>
          <span className={styles.breakdownLabel}>Cleaning fee</span>
          <span>
            {price.currencySymbol}
            {price.cleaningFee.toLocaleString('en-IN')}
          </span>
        </div>

        <div className={styles.breakdownRow}>
          <span className={styles.breakdownLabel}>Airbnb service fee</span>
          <span>
            {price.currencySymbol}
            {price.serviceFee.toLocaleString('en-IN')}
          </span>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.totalRow}>
          <span>Total before taxes</span>
          <span>
            {price.currencySymbol}
            {grandTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </aside>
  );
};
