import React from 'react';
import { Task } from '@kodifaj/common';
import Cards from './cards/Cards';

interface ListingProps {
  tasks?: Task[];
}

const Listing: React.FC<ListingProps> = ({ tasks = [] }) => {
  if (tasks.length === 0) {
    return null;
  }
  console.log(tasks)

  return (
    <div className="max-w-8xl mt-16 mx-auto sm:px-4 lg:px-8" id="projects-listing">
      <div className="ml-4 sm:ml-0 sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl leading-8 font-semibold tracking-wide font-display text-gray-900 sm:text-3xl sm:leading-9">
          Zadania
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 row-gap-8 md:border-gray-400 md:rounded-md md:border">
        <div className="pt-8 text-center md:border-gray-400">
          <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Filtry</h3>
          <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Sortowanie</h3>
        </div>
        <div
          id="projects-listing-section"
          className="md:border-t grid grid-cols-1 row-gap-6 lg:gap-5 xl:grid-cols-3"
        >
          <Cards tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
