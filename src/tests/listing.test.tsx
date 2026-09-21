import { describe, it, expect } from 'vitest';
import { listingData } from '../data/listing';

describe('Airbnb Listing Data Model & Specification Integrity', () => {
  it('should load listing data correctly with mandatory property fields', () => {
    expect(listingData.id).toBe('mirashya-ug10-candolim');
    expect(listingData.title).toBe('Romantic Jacuzzi 1BHK Candolim | Mirashya UG10');
    expect(listingData.guestCount).toBe(3);
    expect(listingData.bedroomCount).toBe(1);
    expect(listingData.bedCount).toBe(1);
    expect(listingData.bathroomCount).toBe(1);
  });

  it('should have 18 total high-resolution photos categorized into rooms', () => {
    expect(listingData.photos.length).toBe(18);
    const heroPhotos = listingData.photos.filter((p) => p.isHero);
    expect(heroPhotos.length).toBe(5);
  });

  it('should contain exact pricing specs and breakdown math', () => {
    const { pricePerNight, cleaningFee, serviceFee } = listingData.price;
    expect(pricePerNight).toBe(4850);
    expect(cleaningFee).toBe(1200);
    expect(serviceFee).toBe(3200);

    const nights = 5;
    const calculatedTotal = pricePerNight * nights + cleaningFee + serviceFee;
    expect(calculatedTotal).toBe(28650);
  });

  it('should have room categories defined for the Photo Tour overlay', () => {
    expect(listingData.roomCategories.length).toBeGreaterThanOrEqual(8);
    const categoryLabels = listingData.roomCategories.map((c) => c.label);
    expect(categoryLabels).toContain('Living room 1');
    expect(categoryLabels).toContain('Full kitchen');
    expect(categoryLabels).toContain('Full bathroom');
    expect(categoryLabels).toContain('Pool');
  });

  it('should list key amenities including private Jacuzzi and Wi-Fi', () => {
    const amenityNames = listingData.amenities.map((a) => a.name);
    expect(amenityNames).toContain('Private Jacuzzi tub');
    expect(amenityNames).toContain('Fast Wi-Fi – 100 Mbps');
  });
});
