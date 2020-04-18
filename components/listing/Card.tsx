import React from 'react';
import { Task } from '../../models/task.types';

interface CardProps {
  task: Task;
}

const Card: React.FC<CardProps> = ({ task }) => {
  return (
    <section className=" min-w-300 max-w-full md: min-w-full transform translate-y-0 bg-gray-100 shadow-sm rounded-md transition-shadow transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div
        className="bg-gray-300 h-64 relative rounded-t-md bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${task.images[0]}` }}
      ></div>
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
      <div className="rounded-b-md">
        <ul className="list-none px-1 py-2 text-right">
          {task.tags.map((tag, index) => (
            <li className="inline px-1 py-1 bg-red-200 mr-1 rounded-md shadow-sm w-4" key={index}>
              <span className="text-sm">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Card;
