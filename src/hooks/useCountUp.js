import { useState, useEffect } from 'react';

/**
 * Custom hook for smooth animated number count-ups when scrolled into view.
 * @param {number} target - The final numeric target.
 * @param {number} duration - Animation duration in ms.
 * @param {boolean} trigger - Whether the element is visible in viewport.
 * @param {number} decimals - Number of decimal places (e.g. 1 for 98.6 or 4.9).
 */
export function useCountUp(target, duration = 2000, trigger = true, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger]);

  if (decimals > 0) {
    return count.toFixed(decimals);
  }
  return Math.floor(count).toLocaleString();
}
