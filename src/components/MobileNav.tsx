import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileNavProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  isFlipping: boolean;
}

export function MobileNav({ currentPage, totalPages, onPrevious, onNext, isFlipping }: MobileNavProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-gray-900/90 backdrop-blur-md px-6 py-4 rounded-full shadow-2xl border-2 border-white/20">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 0 || isFlipping}
        className={`flex items-center justify-center w-20 h-20 rounded-full transition-all ${
          currentPage === 0 || isFlipping
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
            : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white active:scale-95 shadow-lg'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-12 h-12" strokeWidth={3} />
      </button>

      {/* Page Indicator */}
      <div className="flex items-center gap-2 px-4">
        <span className="text-white font-bold text-2xl whitespace-nowrap">
          {currentPage + 1} / {totalPages}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage >= totalPages - 1 || isFlipping}
        className={`flex items-center justify-center w-20 h-20 rounded-full transition-all ${
          currentPage >= totalPages - 1 || isFlipping
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
            : 'bg-gradient-to-br from-red-500 to-red-700 text-white active:scale-95 shadow-lg'
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-12 h-12" strokeWidth={3} />
      </button>
    </div>
  );
}
