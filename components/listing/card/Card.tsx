import React from 'react';
import Link from 'next/link';
import { Task } from '../../../models/task/task.model';
import Stars from '../../stars/Stars';
import Badges from '../../badges/Badges';

interface CardProps {
  task: Task;
}

const Card: React.FC<CardProps> = ({ task }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={`/tasks/${task._id}`}>
        <section className="mt-4 w-full bg-white transform translate-y-0 shadow-sm rounded-md transition-shadow transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg overflow-hidden cursor-pointer">
          <div className="h-64 relative">
            <img
              className="h-full w-full object-cover overflow-hidden rounded-t-md"
              src={task.images[0]}
              alt={task.title}
            />
          </div>
          <div className="h-32 px-2 border-b-2 border-gray-200 relative flex flex-col justify-between">
            <div className="absolute left-0 top-0 indent z-10">
              <span
                className="block ml-2 -mt-3 h-8 w-8 rounded-full z-50 relative bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${task._user.photo}`,
                }}
              />
            </div>
            <span className="absolute top-0 pl-12 text-gray-700 italic underline">
              {task._user.login}
            </span>
            <h4 className="text-center pt-8 mx-1 text-md text-gray-700">{task.title}</h4>
            <Badges tags={task.tags} />
          </div>
          <div className="rounded-b-md px-3 flex justify-between items-center h-12 flex-wrap">
            <Stars rating={4.7} />
            <span className="text-xs text-gray-700 italic">{task.createdAt.slice(0, 10)}</span>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Card;
