import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';

const isMobileState = atom<boolean>({
  key: 'isMobileState',
  default: window.innerWidth < 768,
});

export function useDeviceDetector() {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  return isMobile;
}
