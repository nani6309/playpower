import { ListingData } from '../types/listing';

export const listingData: ListingData = {
  id: 'mirashya-ug10-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  subtitle: 'Entire serviced apartment in Candolim, India',
  location: 'Candolim, Goa, India',
  city: 'Candolim',
  state: 'Goa',
  country: 'India',
  guestCount: 3,
  bedroomCount: 1,
  bedCount: 1,
  bathroomCount: 1,
  propertyType: 'Entire serviced apartment',
  
  host: {
    name: 'Mirashya',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    isSuperhost: true,
    yearsHosting: 4,
    responseRate: '100%',
    responseTime: 'within an hour',
  },

  rating: {
    score: 4.92,
    reviewCount: 14,
    cleanliness: 4.9,
    accuracy: 5.0,
    checkIn: 4.9,
    communication: 5.0,
    location: 4.8,
    value: 4.9,
  },

  price: {
    pricePerNight: 4850,
    currency: 'INR',
    currencySymbol: '₹',
    cleaningFee: 1200,
    serviceFee: 3200,
  },

  roomCategories: [
    { id: 'Living room 1', label: 'Living room 1', description: 'Sofa · Air conditioning · Ceiling fan · TV' },
    { id: 'Living room 2', label: 'Living room 2', description: 'Dining space & accent seating' },
    { id: 'Full kitchen', label: 'Full kitchen', description: 'Refrigerator · Microwave · Induction cooktop · Cookware' },
    { id: 'Bedroom', label: 'Bedroom', description: 'King size bed · Premium mattress · Air conditioning' },
    { id: 'Full bathroom', label: 'Full bathroom', description: 'Private Jacuzzi tub · Hot water shower · Toiletries' },
    { id: 'Gym', label: 'Gym', description: 'Fitness room access' },
    { id: 'Exterior', label: 'Exterior', description: 'Apartment complex facade & entrance' },
    { id: 'Pool', label: 'Pool', description: 'Outdoor shared swimming pool' },
    { id: 'Additional photos', label: 'Additional photos', description: 'Balcony & surrounding garden view' },
  ],

  photos: [
    {
      id: 'photo-1',
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Living room with yellow velvet sofa, wooden coffee table, wall paintings and warm interior lighting',
      category: 'Living room 1',
      isHero: true,
      heroPosition: 'main',
    },
    {
      id: 'photo-2',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      alt: 'Living room seating area with white armchairs and ambient illumination',
      category: 'Living room 2',
      isHero: true,
      heroPosition: 'top-left',
    },
    {
      id: 'photo-3',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury private Jacuzzi bath with mood lighting and stone feature wall',
      category: 'Full bathroom',
      isHero: true,
      heroPosition: 'top-right',
    },
    {
      id: 'photo-4',
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
      alt: 'Master bedroom with king bed, ceiling fan, and warm bedside lamps',
      category: 'Bedroom',
      isHero: true,
      heroPosition: 'bottom-left',
    },
    {
      id: 'photo-5',
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      alt: 'Exterior facade view of the Mirashya apartment building complex',
      category: 'Exterior',
      isHero: true,
      heroPosition: 'bottom-right',
    },
    {
      id: 'photo-6',
      src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      alt: 'Full kitchen featuring modern cabinets, microwave, and kettle',
      category: 'Full kitchen',
    },
    {
      id: 'photo-7',
      src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      alt: 'Bathroom vanity mirror and glass shower area',
      category: 'Full bathroom',
    },
    {
      id: 'photo-8',
      src: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80',
      alt: 'Resort outdoor swimming pool with lounge deck chairs',
      category: 'Pool',
    },
    {
      id: 'photo-9',
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      alt: 'Equipped fitness center and gym equipment',
      category: 'Gym',
    },
    {
      id: 'photo-10',
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      alt: 'Apartment balcony with tropical garden views',
      category: 'Additional photos',
    },
    {
      id: 'photo-11',
      src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      alt: 'Cozy living room corner detail with wall art',
      category: 'Living room 1',
    },
    {
      id: 'photo-12',
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      alt: 'Dining area setup with wooden table and seating',
      category: 'Living room 2',
    },
    {
      id: 'photo-13',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      alt: 'Close-up of private Jacuzzi jet tub',
      category: 'Full bathroom',
    },
    {
      id: 'photo-14',
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      alt: 'Bedroom nightstand with warm reading lamp',
      category: 'Bedroom',
    },
    {
      id: 'photo-15',
      src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
      alt: 'Clear swimming pool waters under blue sky',
      category: 'Pool',
    },
    {
      id: 'photo-16',
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      alt: 'Apartment entryway and decorative plants',
      category: 'Exterior',
    },
    {
      id: 'photo-17',
      src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      alt: 'Open plan view from living area into bedroom space',
      category: 'Living room 1',
    },
    {
      id: 'photo-18',
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      alt: 'Kitchen countertop detail with coffee maker and mugs',
      category: 'Full kitchen',
    },
  ],

  highlights: [
    {
      id: 'h1',
      icon: 'Star',
      title: 'Superhost',
      description: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    },
    {
      id: 'h2',
      icon: 'MapPin',
      title: 'Great location',
      description: '95% of recent guests gave the location a 5-star rating.',
    },
    {
      id: 'h3',
      icon: 'Key',
      title: 'Great check-in experience',
      description: '100% of recent guests gave the check-in process a 5-star rating.',
    },
  ],

  description: `Welcome to our romantic 1BHK luxury serviced apartment located in the heart of Candolim, Goa! Designed for couples and small families looking for a peaceful getaway, Mirashya UG10 offers premium comfort with modern amenities.

Key Highlights:
• Private indoor Jacuzzi hot tub for ultimate relaxation
• High-speed Wi-Fi and smart TV with OTT apps
• Fully equipped kitchen with microwave, induction cooktop, and refrigerator
• Access to the resort's crystal-clear swimming pool and fitness gym
• Just 5 minutes drive from Candolim Beach and popular Goa shacks and restaurants

Enjoy tropical views from the private balcony, unwind in the Jacuzzi after a day at the beach, and experience authentic Goan hospitality!`,

  sleepingArrangements: [
    {
      roomName: 'Bedroom 1',
      bedType: '1 queen bed',
      icon: 'BedDouble',
    },
  ],

  amenities: [
    { id: 'a1', icon: 'Wifi', name: 'Fast Wi-Fi – 100 Mbps', category: 'Connectivity' },
    { id: 'a2', icon: 'Bath', name: 'Private Jacuzzi tub', category: 'Bathroom' },
    { id: 'a3', icon: 'Wind', name: 'Air conditioning', category: 'Climate control' },
    { id: 'a4', icon: 'Waves', name: 'Shared outdoor pool', category: 'Services' },
    { id: 'a5', icon: 'Tv', name: 'HD TV with Netflix & Prime', category: 'Entertainment' },
    { id: 'a6', icon: 'Car', name: 'Free parking on premises', category: 'Parking' },
    { id: 'a7', icon: 'Dumbbell', name: 'Building gym access', category: 'Facilities' },
    { id: 'a8', icon: 'Utensils', name: 'Full kitchen space', category: 'Dining' },
    { id: 'a9', icon: 'Sparkles', name: 'Dedicated workspace', category: 'Work' },
    { id: 'a10', icon: 'ShieldCheck', name: '24/7 Security & CCTV', category: 'Safety' },
  ],

  houseRules: [
    'Check-in: 2:00 PM – 10:00 PM',
    'Checkout before 11:00 AM',
    '3 guests maximum',
    'No smoking inside',
    'No loud parties or events after 10:00 PM',
  ],
};
