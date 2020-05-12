import React from 'react';
import Stars from '../../../stars/Stars';

interface UserActivitiesProps {
  login: string;
  photo?: string;
}

const UserActivities: React.FC<UserActivitiesProps> = ({ login, photo }) => {
  return (
    <section className="w-full md:w-1/3 mt-8 md:mt-0">
      <h3 className="font-bold text-center md:hidden">Dotychczasowa aktywność</h3>
      <div className="flex items-center justify-between px-2 mt-4">
        <div className="w-2/12">
          <img src={photo} alt={`${login} photo`} className="w-10 h-10 rounded-full mr-8" />
        </div>
        <p className="text-sm w-7/12">
          Dodane nowe zadanie: <span className="text-blue-700">Karuzela w czystym JS</span>
        </p>
        <p className="text-gray-700 text-xl font-thin w-2/12 text-right">33 m</p>
      </div>
      <div className="border-b-2 mt-4 mx-2"></div>
      <div className="flex items-center justify-between px-2 mt-4">
        <div className="w-2/12">
          <img src={photo} alt={`${login} photo`} className="w-10 h-10 rounded-full mr-8" />
        </div>
        <p className="text-sm w-7/12">
          Dodane nowe rozwiązanie: <span className="text-red-700">Karuzela w czystym JS</span>
        </p>
        <p className="text-gray-700 text-xl font-thin w-2/12 text-right">10 h</p>
      </div>
      <div className="border-b-2 mt-4 mx-2"></div>
      <div className="flex items-center justify-between px-2 mt-4">
        <div className="w-2/12">
          <img src={photo} alt={`${login} photo`} className="w-10 h-10 rounded-full mr-8" />
        </div>
        <p className="text-sm w-7/12">
          Dodane nowe zadanie: <span className="text-blue-700">Karuzela w czystym JS</span>
        </p>
        <p className="text-gray-700 text-xl font-thin w-2/12 text-right">11 h</p>
      </div>
      <div className="border-b-2 mt-4 mx-2"></div>
      <div className="flex items-center justify-between px-2 mt-4">
        <div className="w-2/12">
          <img src={photo} alt={`${login} photo`} className="w-10 h-10 rounded-full mr-8" />
        </div>
        <div className="text-sm w-7/12">
          Oceniono zadanie: <span className="text-red-700">Karuzela w czystym JS</span>
          <Stars rating={4.7} />
        </div>
        <p className="text-gray-700 text-xl font-thin w-2/12 text-right">1 d</p>
      </div>
      <div className="border-b-2 mt-4 mx-2"></div>
    </section>
  );
};

export default UserActivities;
