import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Button, { ButtonLayout } from '../../shared/button/Button';
import { useUserDetailState } from '../../context/UserDetailContext';


const UserHero: React.FC = () => {

  const {photo, login} = useUserDetailState();

  return (
    <div className="bg-white w-full pb-12 px-4">
      <section className="max-w-8xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:px-8">
        <div className="flex flex-row py-8">
          <img
            src={photo}
            alt={`${login} photo`}
            className=" w-16 h-16 md:w-32 md:h-32 rounded-full"
          />
          <div className="flex flex-col items-start ml-6 md:ml-12 -mt-2 md:mt-2">
            <h2 className="text-2xl md:text-4xl font-bold">{login}</h2>
            <p className="text-xs md:text-sm text-gray-700 -mt-2">przykladowy.email@gmail.com</p>
            <div className="flex mt-3 items-center">
              <FaGithub className="text-md mr-2" />
              <p className="text-sm">{login}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:-mt-8">
          <Button type="button" layout={ButtonLayout.Black}>
            Button2
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UserHero;
