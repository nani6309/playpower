import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header} role="banner">
      {/* Brand Logo */}
      <a href="#" className={styles.logoSection} aria-label="Airbnb homepage">
        <svg
          className={styles.logoIcon}
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.408-3.601 7.806-8.037 7.806-2.54 0-4.814-1.127-6.463-2.92l-.500-.573-.5.573c-1.649 1.793-3.923 2.92-6.463 2.92-4.436 0-8.037-3.398-8.037-7.806 0-.924.243-1.805.91-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.537 1.963 10.992 1 13 1h3zm0 2h-3c-1.285 0-2.316.64-3.418 2.617l-.46.885c-1.921 3.766-6.046 12.414-7.014 14.664-.607 1.448-.808 2.21-.848 2.969l-.008.265c0 3.336 2.695 5.806 6.037 5.806 2.052 0 3.931-.96 5.253-2.547l.959-1.155.959 1.155c1.322 1.587 3.201 2.547 5.253 2.547 3.342 0 6.037-2.47 6.037-5.806 0-.759-.201-1.521-.808-2.969l-.048-.115-6.966-14.549c-1.102-1.977-2.133-2.617-3.418-2.617zm0 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
        </svg>
        <span className={styles.logoText}>airbnb</span>
      </a>

      {/* Center Search Pill */}
      <button className={styles.searchPill} aria-label="Search destination, dates, and guests">
        <span className={styles.searchSegment}>Anywhere</span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.searchSegment}>Any week</span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.searchSegmentMuted}>Add guests</span>
        <span className={styles.searchIconButton} aria-hidden="true">
          <Search size={14} strokeWidth={3} />
        </span>
      </button>

      {/* User Actions & Menu */}
      <nav className={styles.userNav} aria-label="User account navigation">
        <a href="#" className={styles.hostLink}>
          Airbnb your home
        </a>
        <button className={styles.globeButton} aria-label="Choose language and currency">
          <Globe size={18} />
        </button>
        <button className={styles.userMenuPill} aria-label="User profile menu">
          <Menu size={16} />
          <div className={styles.userAvatar} aria-hidden="true">
            <User size={18} />
          </div>
        </button>
      </nav>
    </header>
  );
};
