import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { ListingPage } from './components/Listing/ListingPage';
import { PhotoTour } from './components/PhotoTour/PhotoTour';
import { Lightbox } from './components/Lightbox/Lightbox';
import { listingData } from './data/listing';
import './styles/global.css';

export const App: React.FC = () => {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleOpenPhotoTour = (initialIndex: number = 0) => {
    setActivePhotoIndex(initialIndex);
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="app-shell">
      {/* Primary Sticky Header */}
      <Header />

      {/* Main Listing View (View 1) */}
      <main id="main-content">
        <ListingPage
          listing={listingData}
          onOpenPhotoTour={handleOpenPhotoTour}
        />
      </main>

      {/* View 2: Full-Screen Photo Tour Overlay */}
      <PhotoTour
        listing={listingData}
        isOpen={isPhotoTourOpen}
        onClose={handleClosePhotoTour}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* View 3: Single-Photo Lightbox Modal */}
      <Lightbox
        photos={listingData.photos}
        activePhotoIndex={activePhotoIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={setActivePhotoIndex}
      />
    </div>
  );
};
export default App;
