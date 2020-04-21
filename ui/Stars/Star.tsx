import React from 'react';
import { StarType } from './utils/getStarType';

interface StarProps {
  type: number;
}

const Star: React.FC<StarProps> = ({ type }) => {
  if (type === StarType.Full) {
    return (
      <svg
        data-testid="full-star"
        className="w-4 h4 fill-current text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
      </svg>
    );
  }
  if (type === StarType.Half) {
    return (
      <svg
        data-testid="half-star"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="w-4 h4"
      >
        <defs>
          <linearGradient id="half">
            <stop offset="0%" stopColor="#f56565" />
            <stop offset="50%" stopColor="#f56565" />
            <stop offset="50%" stopColor="#a0aec0" />
            <stop offset="100%" stopColor="#a0aec0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
        ></path>
      </svg>
    );
  }
  return (
    <svg
      data-testid="gray-star"
      className="w-4 h4 fill-current text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
    </svg>
  );
};

export default Star;
