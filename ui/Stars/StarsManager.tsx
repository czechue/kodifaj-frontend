import React from 'react';
import HalfStar from './HalfStar';
import FullStar from './FullStar';
import GrayStar from './GrayStar';

interface StarsProps {
  rating: number;
}

const StarsManager: React.FC<StarsProps> = ({ rating }) => {
  const stars = [...Array.from({ length: 5 })].map((_, index) => {
    if (index < Math.floor(rating)) {
      return <FullStar key={index} />;
    }
    if (index === Math.floor(rating)) {
      if (rating % 1 === 1) {
        return <FullStar key={index} />;
      } else if (rating % 1 > 0.5) {
        return <HalfStar key={index} />;
      } else return <GrayStar key={index} />;
    } else return <GrayStar key={index} />;
  });
  return <div className="flex">{stars}</div>;
};

export default StarsManager;
