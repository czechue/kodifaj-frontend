import React from 'react';
import Badges from '../../../badges/Badges';
import { FaGithub } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';

interface UserSolutionsProps {
  solutions?: string[];
  login: string;
  photo?: string;
}

const UserSolutions: React.FC<UserSolutionsProps> = ({ solutions, login, photo }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 max-w-screen-sm xl:max-w-full">
        {solutions?.map((solution) => {
          return (
            <section
              key={solution}
              className="w-full max-w-screen-sm border border-gray-400 rounded-md flex flex-col px-2 py-4 relative bg-white shadow-xs"
            >
              <div className="-mt-4">
                <Badges tags={['html', 'css', 'js']} />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm underline italic">2019-10-21</p>
              </div>
              <h4 className="mt-2 mb-4 text-center text-blue-700">Karuzela w czystym JS</h4>
              <div className="flex justify-center md:justify-between items-center">
                <img
                  src={photo}
                  alt={`${login} photo`}
                  className="w-5 md:w-8 h-5 md:h-8 rounded-full mr-8 absolute top-0 left-0 ml-2 mt-4 md:mt-0 md:static "
                />
                <div className="w-full flex justify-around md:justify-end ">
                  <a
                    href="/"
                    className="w-32 flex justify-between items-center border-gray-400 border rounded-md p-1 text-sm md:mx-4 hover:underline"
                  >
                    <FaGithub className="w-6 h-6 mr-2" />
                    Kod źródłowy
                  </a>
                  <a
                    href="/"
                    className="w-32 flex w-14 justify-between items-center border-gray-400 border rounded-md p-1 text-sm hover:underline"
                  >
                    <MdLiveTv className="w-6 h-6 mr-2" />
                    Wersja live
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default UserSolutions;
