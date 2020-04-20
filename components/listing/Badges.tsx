import React from 'react';

interface BadgesProps {
  tags: string[];
}

const Badges: React.FC<BadgesProps> = ({ tags }) => {
  return (
    <ul className="list-none py-2 text-right">
      {tags.map((tag, index) => (
        <li className="inline px-1 py-1 bg-red-200 mr-1 rounded-md shadow-sm w-4" key={index}>
          <span className="text-sm">#{tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default Badges;
