import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MobileNav } from './MobileNav';

interface Page {
  id: number;
  component: React.ReactNode;
}

interface PageFlipBookProps {
  pages: Page[];
  onPageChange?: (pageNumber: number) => void;
}

export function PageFlipBook({ pages, onPageChange }: PageFlipBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const flippingTimerRef = useRef<number | null>(null);

  const stopAllAudio = useCallback(() => {
    // Stop speech synthesis immediately
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    // Stop all HTML5 audio elements
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    
    // Stop all HTML5 video elements
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  }, []);

  const nextPage = useCallback(() => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      // Stop all audio BEFORE flipping
      stopAllAudio();
      
      setIsFlipping(true);
      setDirection(1);
      setCurrentPage(currentPage + 1);
      onPageChange?.(currentPage + 1);
      
      if (flippingTimerRef.current) {
        clearTimeout(flippingTimerRef.current);
      }
      flippingTimerRef.current = window.setTimeout(() => {
        setIsFlipping(false);
        flippingTimerRef.current = null;
      }, 150);
    }
  }, [currentPage, pages.length, onPageChange, isFlipping, stopAllAudio]);

  const prevPage = useCallback(() => {
    if (currentPage > 0 && !isFlipping) {
      // Stop all audio BEFORE flipping
      stopAllAudio();
      
      setIsFlipping(true);
      setDirection(-1);
      setCurrentPage(currentPage - 1);
      onPageChange?.(currentPage - 1);
      
      if (flippingTimerRef.current) {
        clearTimeout(flippingTimerRef.current);
      }
                  flippingTimerRef.current = window.setTimeout(() => {
                    setIsFlipping(false);
                    flippingTimerRef.current = null;
                  }, 150);
    }
  }, [currentPage, onPageChange, isFlipping, stopAllAudio]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cleanup on unmount only
  useEffect(() => {
    return () => {
      if (flippingTimerRef.current) {
        clearTimeout(flippingTimerRef.current);
      }
      stopAllAudio();
    };
  }, [stopAllAudio]);

  // Touch navigation removed - using button navigation instead

  // Realistic page peel transition variants - optimized for mobile
  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: isMobile ? 0 : (direction > 0 ? -180 : 180),
      opacity: 0,
      scale: isMobile ? 1 : 0.9,
      x: direction > 0 ? '100%' : '-100%',
      transformOrigin: direction > 0 ? 'left center' : 'right center',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      transformOrigin: 'center center',
    },
    exit: (direction: number) => ({
      rotateY: isMobile ? 0 : (direction > 0 ? 180 : -180),
      opacity: 0,
      scale: isMobile ? 1 : 0.9,
      x: direction > 0 ? '-100%' : '100%',
      transformOrigin: direction > 0 ? 'right center' : 'left center',
    }),
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ 
        perspective: isMobile ? 'none' : '3000px',
        perspectiveOrigin: '50% 50%'
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={isMobile ? {
            opacity: { duration: 0.12 },
            x: { duration: 0.18, ease: 'easeInOut' }
          } : {
            rotateY: { 
              type: 'spring', 
              stiffness: 220, 
              damping: 18,
              mass: 0.6 
            },
            opacity: { duration: 0.12 },
            scale: { 
              type: 'spring',
              stiffness: 200,
              damping: 18
            },
            x: {
              type: 'spring',
              stiffness: 200,
              damping: 18
            }
          }}
          className="absolute inset-0"
          style={{
            transformStyle: isMobile ? 'flat' : 'preserve-3d',
            backfaceVisibility: isMobile ? 'visible' : 'hidden',
            boxShadow: isMobile ? 'none' : (isFlipping 
              ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1)'
              : '0 10px 30px rgba(0, 0, 0, 0.1)'),
          }}
        >
          {/* Page shadow overlay for depth */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipping ? 0.3 : 0 }}
            transition={{ duration: 0.12 }}
          />
          
          {pages[currentPage]?.component}
        </motion.div>
      </AnimatePresence>

      {/* Page curl shadow effect */}
      {isFlipping && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          style={{
            background: direction > 0
              ? 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 30%)'
              : 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 30%)',
          }}
        />
      )}

      {/* Navigation indicators - desktop only */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {pages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                if (!isFlipping && index !== currentPage) {
                  // Stop all audio BEFORE flipping
                  stopAllAudio();
                  
                  setIsFlipping(true);
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                  onPageChange?.(index);
                  
                  if (flippingTimerRef.current) {
                    clearTimeout(flippingTimerRef.current);
                  }
                  flippingTimerRef.current = window.setTimeout(() => {
                    setIsFlipping(false);
                    flippingTimerRef.current = null;
                  }, 500);
                }
              }}
              className={`rounded-full transition-all ${
                index === currentPage
                  ? 'bg-red-600 w-8 h-3'
                  : 'bg-white/50 hover:bg-white/80 w-3 h-3'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows - desktop only */}
      {!isMobile && currentPage > 0 && (
        <motion.button
          onClick={prevPage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-4 transition-all disabled:opacity-30"
          aria-label="Previous page"
          disabled={isFlipping}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      )}

      {!isMobile && currentPage < pages.length - 1 && (
        <motion.button
          onClick={nextPage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-4 transition-all disabled:opacity-30"
          aria-label="Next page"
          disabled={isFlipping}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      )}

      {/* Mobile Navigation - Outside magazine container */}
      <MobileNav
        currentPage={currentPage}
        totalPages={pages.length}
        onPrevious={prevPage}
        onNext={nextPage}
        isFlipping={isFlipping}
      />
    </div>
  );
}
