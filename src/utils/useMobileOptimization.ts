import { useState, useEffect } from 'react';

export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check for mobile device or smaller screens
      const mobile = window.innerWidth <= 768 || 
                     'ontouchstart' in window ||
                     navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Return simplified animation props for mobile
  const getAnimationProps = (desktopProps: any, mobileOverride?: any) => {
    if (!isMobile) return desktopProps;
    
    // Default mobile simplifications
    const mobileDefaults = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    };

    return mobileOverride || mobileDefaults;
  };

  return { isMobile, getAnimationProps };
}
