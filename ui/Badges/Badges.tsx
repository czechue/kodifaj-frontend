import React from 'react';

interface BadgesProps {
  tags: string[];
}

const Badges: React.FC<BadgesProps> = ({ tags }) => {
  return (
    <ul className="list-none py-1 text-right">
      {tags.map((tag, index) => (
        <li
          className="inline-flex w-auto px-1 bg-red-200 mr-1 mt-4 rounded-md shadow-sm w-4 items-center"
          key={index}
        >
          <span data-testid="tag" className="text-xs">
            #{tag}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Badges;
