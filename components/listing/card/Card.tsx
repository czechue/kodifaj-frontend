import React from 'react';
import Link from 'next/link';
import Stars from '../../stars/Stars';
import Badges from '../../badges/Badges';

interface UserProps {
  _id: string;
  login: string;
}
interface CardProps {
  _id: string;
  _user: UserProps;
  images: string[];
  title: string;
  tags: string[];
  createdAt: string;
}

const Card: React.FC<CardProps> = ({ _id, _user, images, title, tags, createdAt }) => {
  const creationTime = createdAt.slice(0, 10);
  const userPhoto =
    'https://avatars2.githubusercontent.com/u/21274642?s=400&u=d2f9f822cccbbd841e2c37e2c9b790644f51b8d8&v=4';
  const userLogin = _user.login;
  return (
    <div className="flex flex-col items-center">
      <Link href="/tasks/[taskId]" as={`/tasks/${_id}`}>
        <a className="mt-4 w-full bg-white transform translate-y-0 shadow-sm rounded-md transition-shadow transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg overflow-hidden cursor-pointer">
          <section>
            <div className="h-64 relative">
              <img
                className="h-full w-full object-cover overflow-hidden rounded-t-md"
                src={images[0]}
                alt={title}
              />
            </div>
            <div className="h-40 px-2 border-b-2 border-gray-200 relative flex flex-col justify-between">
              <div className="absolute left-0 top-0 indent z-10">
                <span
                  className="block ml-2 -mt-3 h-8 w-8 rounded-full z-50 relative bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${userPhoto ? userPhoto : ''})`,
                  }}
                />
              </div>
              <span className="absolute top-0 pl-12 text-gray-700 italic underline">
                {userLogin}
              </span>
              <h4 className="text-center pt-10 mx-1 text-md text-gray-700">{title}</h4>
              <Badges tags={tags} />
            </div>
            <div className="rounded-b-md px-3 flex justify-between items-center h-12 flex-wrap">
              <Stars rating={4.7} />
              <span className="text-xs text-gray-700 italic">{creationTime}</span>
            </div>
          </section>
        </a>
      </Link>
    </div>
  );
};

export default Card;
