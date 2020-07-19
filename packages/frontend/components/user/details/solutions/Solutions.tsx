import React from 'react';
import SolutionDetails, { SolutionDetailsLayout } from '../../../shared/solution/Solution';
import { useUserDetailState } from '../../../context/UserDetailContext';

const UserSolutions: React.FC = () => {
  const { solutions } = useUserDetailState();

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 max-w-screen-sm xl:max-w-full">
        {solutions &&
          solutions.map((solution, index) => (
            <SolutionDetails
              key={index}
              solution={solution}
              layout={SolutionDetailsLayout.WithTitle}
            />
          ))}
      </div>
    </section>
  );
};

export default UserSolutions;
