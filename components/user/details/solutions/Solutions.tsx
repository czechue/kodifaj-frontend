import React from 'react';
import SolutionDetails, { SolutionDetailsLayout } from 'components/shared/solution/Solution';
import { Solution } from 'lib/models/solution/solution';

interface UserSolutionsProps {
  solutions?: Solution[];
}

const UserSolutions: React.FC<UserSolutionsProps> = ({ solutions }) => {
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
