import React from 'react';
import getStarType from './utils/getStarType/getStarType';
import Star from './star/Star';

interface StarsProps {
  rating: number;
}

const MAX_STARS = 5;

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const stars = [...Array.from({ length: MAX_STARS })].map((_, index) => {
    const type = getStarType(rating, index);
    return <Star type={type} key={index} />;
  });
  return (
    <div className="flex">
      {stars} <span className="ml-1 text-xs">({rating.toFixed(1)})</span>
    </div>
  );
};

export default Stars;
