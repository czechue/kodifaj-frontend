import React from 'react';
import HalfStar from './HalfStar';
import FullStar from './FullStar';

interface StarsProps {
  rating: number;
}

const StarsManager: React.FC<StarsProps> = ({ rating }) => {
  const stars = [...Array.from({ length: 5 })].map((_, index) => {
    if (index < Math.floor(rating) || (index === Math.floor(rating) && rating % 1 === 1)) {
      return <FullStar key={index} variant="full" />;
    }
    if (index === Math.floor(rating) && rating % 1 > 0.5) {
      return <HalfStar key={index} />;
    }
    return <FullStar key={index} variant="empty" />;
  });
  return <div className="flex">{stars}</div>;
};

export default StarsManager;
