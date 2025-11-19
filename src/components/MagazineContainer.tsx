import React, { useEffect, useState } from 'react';

interface MagazineContainerProps {
  children: React.ReactNode;
}

export function MagazineContainer({ children }: MagazineContainerProps) {
  const [scale, setScale] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const magazineRatio = 1 / 1.414; // width / height ratio
  const DESIGN_WIDTH = 1754;
  const DESIGN_HEIGHT = 2480;

  useEffect(() => {
    const calculateScale = () => {
      try {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Add padding for better mobile experience
        const padding = windowWidth < 768 ? 20 : 40;
        const availableWidth = windowWidth - padding;
        const availableHeight = windowHeight - padding;

        // Calculate scale based on both width and height
        const scaleByWidth = availableWidth / DESIGN_WIDTH;
        const scaleByHeight = availableHeight / DESIGN_HEIGHT;
        
        // Use the smaller scale to ensure full content fits
        let newScale = Math.min(scaleByWidth, scaleByHeight, 1);
        
        // Ensure scale is valid and not too small
        if (!isFinite(newScale) || newScale <= 0 || isNaN(newScale)) {
          newScale = 0.3;
        }

        setScale(newScale);
        setIsReady(true);
      } catch (error) {
        console.error('Error calculating scale:', error);
        setScale(0.5);
        setIsReady(true);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [DESIGN_WIDTH, DESIGN_HEIGHT]);

  // Ensure scale is always a valid number
  const safeScale = (isFinite(scale) && !isNaN(scale) && scale > 0) ? scale : 0.5;

  // Don't render until we have a valid scale
  if (!isReady) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 overflow-hidden p-2 md:p-5">
      <div
        className="relative bg-white shadow-2xl overflow-hidden"
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${safeScale})`,
          transformOrigin: 'center center',
          minWidth: `${DESIGN_WIDTH}px`,
          minHeight: `${DESIGN_HEIGHT}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
