import React from 'react';
import { Task } from '../../models/task.types';

interface ListingProps {
  tasks?: Task[];
}

const backgroundStyle = {
  backgroundImage: `url('https://avatars2.githubusercontent.com/u/21274642?s=400&u=d2f9f822cccbbd841e2c37e2c9b790644f51b8d8&v=4')`,
};

const Listing: React.FC<ListingProps> = ({ tasks = [] }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div id="projects-listing">
      <div>
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900 sm:text-3xl sm:leading-9">
            Zadania
          </h2>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 row-gap-8 bg-orange-600">
        <div
          id="projects-listing-section"
          className="border-t border-gray-200 pt-8 grid grid-cols-1 row-gap-6 lg:grid-cols-4 lg:gap-5"
        >
          <div>
            <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Filtry</h3>
            <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">
              Sortowanie
            </h3>
          </div>
          <div className="grid grid-cols-1 row-gap-8 sm:grid-cols-2 sm:col-gap-5 sm:row-gap-6 md:grid-cols-3 lg:col-span-3 ml-8 mr-8 mb-8">
            {tasks.map((task) => (
              <section className=" bg-gray-100 rounded-md" key={task._id}>
                <div
                  className="bg-gray-300 h-64 relative rounded-t-md bg-cover"
                  style={{ backgroundImage: `url(${task.images[0]}` }}
                ></div>
                <div className="h-32 border-b-2 border-gray-200">
                  <h4 className="text-center pt-4 ml-2 text-lg">{task.title}</h4>
                </div>
                <div className="rounded-b-md">
                  <ul className="list-none px-1 py-2 text-right">
                    {task.tags.map((tag, index) => (
                      <li className="inline px-1 bg-red-300 mr-1 rounded-md shadow-md" key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
