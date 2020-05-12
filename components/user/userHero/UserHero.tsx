import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from '../../shared/button/Button';

interface UserHeroProps {
  login: string;
  photo?: string;
}

const UserHero: React.FC<UserHeroProps> = ({ login, photo }) => {
  return (
    <div className="bg-white w-full pb-12 px-4">
      <section className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-row md:ml-8 py-8">
          <img
            src={photo}
            alt={`${login} photo`}
            className=" w-16 h-16 md:w-32 md:h-32 rounded-full"
          />
          <div className="flex flex-col items-start ml-6 md:ml-12 -mt-2 md:mt-2">
            <h1 className="text-2xl md:text-4xl font-bold">{login}</h1>
            <p className="text-xs md:text-sm text-gray-700 -mt-2">przykladowy.email@gmail.com</p>
            <div className="flex mt-3 items-center">
              <FaGithub className="text-md mr-2" />
              <p className="text-sm">{login}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full px-4 md:-mt-8">
          <Button label="Button" />
          <Button label="Button1" black />
        </div>
      </section>
    </div>
  );
};

export default UserHero;
