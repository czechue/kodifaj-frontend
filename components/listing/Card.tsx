import React from 'react';
import { Task } from '../../models/task.types';
import StarsManager from '../../ui/Stars/StarsManager';

interface CardProps {
  task: Task;
}

const Card: React.FC<CardProps> = ({ task }) => {
  return (
    <div className="flex flex-col items-center">
      <section className="mt-4 min-w-full transform translate-y-0 bg-gray-100 shadow-sm rounded-md transition-shadow transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg overflow-hidden">
        <div className="bg-gray-300 h-64 relative">
          <img
            className="h-full w-full object-cover overflow-hidden rounded-t-md"
            src={task.images[0]}
            alt={task.title}
          />
        </div>
        <div className="h-32 border-b-2 border-gray-200 relative">
          <div className="absolute left-0 top-0 indent z-10">
            <span
              className="block ml-2 -mt-3 h-8 w-8 rounded-full z-50 relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${task._user.photo}`,
              }}
            ></span>
          </div>
          <h4 className="text-center pt-8 mx-1 text-lg text-gray-700">{task.title}</h4>
        </div>
        <div className="rounded-b-md flex justify-between items-center mx-4 h-10">
          <StarsManager rating={1.123} />
          <ul className="list-none px-1 py-2 text-right">
            {task.tags.map((tag, index) => (
              <li className="inline px-1 py-1 bg-red-200 mr-1 rounded-md shadow-sm w-4" key={index}>
                <span className="text-sm">#{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Card;
