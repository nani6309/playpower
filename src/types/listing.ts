export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: RoomCategory;
  width?: number;
  height?: number;
  isHero?: boolean;
  heroPosition?: 'main' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export type RoomCategory =
  | 'Living room 1'
  | 'Living room 2'
  | 'Full kitchen'
  | 'Bedroom'
  | 'Full bathroom'
  | 'Gym'
  | 'Exterior'
  | 'Pool'
  | 'Additional photos';

export interface RoomCategoryInfo {
  id: RoomCategory;
  label: string;
  description?: string;
}

export interface HostInfo {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  yearsHosting: number;
  responseRate: string;
  responseTime: string;
}

export interface RatingSummary {
  score: number;
  reviewCount: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface HighlightItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AmenityItem {
  id: string;
  icon: string;
  name: string;
  category: string;
}

export interface SleepingArrangement {
  roomName: string;
  bedType: string;
  icon: string;
}

export interface PriceBreakdown {
  pricePerNight: number;
  currency: string;
  currencySymbol: string;
  cleaningFee: number;
  serviceFee: number;
}

export interface ListingData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  state: string;
  country: string;
  guestCount: number;
  bedroomCount: number;
  bedCount: number;
  bathroomCount: number;
  propertyType: string;
  host: HostInfo;
  rating: RatingSummary;
  price: PriceBreakdown;
  photos: Photo[];
  roomCategories: RoomCategoryInfo[];
  highlights: HighlightItem[];
  description: string;
  sleepingArrangements: SleepingArrangement[];
  amenities: AmenityItem[];
  houseRules: string[];
}
