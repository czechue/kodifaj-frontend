import React from 'react';
import { StarType } from '../utils/getStarType/getStarType';

interface StarProps {
  type: StarType;
}

const Star: React.FC<StarProps> = ({ type }) => {
  if (type === StarType.Full) {
    return <img data-testid="full-star" className="w-4 h4" src="./star-full.svg" alt="Full star" />;
  }
  if (type === StarType.Half) {
    return <img data-testid="half-star" className="w-4 h4" src="./star-half.svg" alt="Half star" />;
  }
  return <img data-testid="gray-star" className="w-4 h4" src="./star-empty.svg" alt="Empty star" />;
};

export default Star;
