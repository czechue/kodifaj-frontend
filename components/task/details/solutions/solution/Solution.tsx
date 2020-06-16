import React from 'react';
import { Solution } from 'lib/models/solution/solution';
import Stars from 'components/stars/Stars';

interface SolutionProps {
  solution: Solution;
}

const SolutionDetails: React.FC<SolutionProps> = ({ solution }) => {
  const {
    _user: { photo, login },
  } = solution;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={photo} alt="User photo" className="w-8 h-8 rounded-full mr-2" />
          <p className="text-xs">@{login}</p>
        </div>
        <Stars rating={4.7} />
        <p className="text-gray-700 text-xl font-thin w-2/12 text-right">10 h</p>
      </div>
      <div className="border border-b-2 mt-4 mx-2" />
    </>
  );
};

export default SolutionDetails;
