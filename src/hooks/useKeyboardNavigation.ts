import { useEffect } from 'react';

interface KeyboardNavigationOptions {
  onEscape?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  isActive?: boolean;
}

/**
 * Custom hook to register keyboard navigation shortcuts (Escape, ArrowLeft, ArrowRight).
 */
export function useKeyboardNavigation({
  onEscape,
  onArrowLeft,
  onArrowRight,
  isActive = true,
}: KeyboardNavigationOptions) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          if (onEscape) {
            e.preventDefault();
            onEscape();
          }
          break;
        case 'ArrowLeft':
          if (onArrowLeft) {
            e.preventDefault();
            onArrowLeft();
          }
          break;
        case 'ArrowRight':
          if (onArrowRight) {
            e.preventDefault();
            onArrowRight();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscape, onArrowLeft, onArrowRight, isActive]);
}
