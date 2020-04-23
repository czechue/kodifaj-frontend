import { useEffect, useState } from 'react';

function useWindowWidth(): number {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateWidth(): void {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return (): void => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

export default useWindowWidth;
