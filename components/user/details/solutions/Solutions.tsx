import React from 'react';
import Badges from '../../../badges/Badges';

interface UserSolutionsProps {
  solutions?: string[];
  login: string;
  photo?: string;
}

const UserSolutions: React.FC<UserSolutionsProps> = ({ solutions, login, photo }) => {
  console.log(solutions);
  return (
    <section className="w-full">
      <h3>Rozwiązania zadań</h3>
      <div className="w-full grid grid-cols-2 gap-4 mt-4">
        {solutions?.map((solution) => {
          return (
            <section
              key={solution}
              className="w-full inline border border-gray-400 rounded-md flex flex-col px-4 py-4 relative bg-white"
            >
              <div className="flex items-center">
                <img src={photo} alt={`${login} photo`} className="w-10 h-10 rounded-full mr-8" />
                <h4>Karuzela w czystym JS</h4>
              </div>
              <p>Data dodania: 2019-10-21</p>
              <div className="absolute right-0 top-0 mr-2">
                <Badges tags={['html', 'css', 'js']} />
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default UserSolutions;
