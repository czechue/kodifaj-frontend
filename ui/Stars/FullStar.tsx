import React from 'react';

interface StarProps {
  variant: 'full' | 'empty';
}

const FullStar: React.FC<StarProps> = ({ variant }) => {
  return (
    <svg
      data-testid={`${variant === 'full' ? 'full-star' : 'gray-star'}`}
      className={`w-4 h4 fill-current ${variant === 'full' ? `text-red-500` : `text-gray-500`}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
    </svg>
  );
};

export default FullStar;
