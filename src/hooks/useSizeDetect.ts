import { useEffect, useState } from 'react';

export const useSizeDetect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      // setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowWidth };
};
