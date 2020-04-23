import React from 'react';
import { Task } from '../../models/task.types';
import Cards from './Cards';

interface ListingProps {
  tasks?: Task[];
}

const Listing: React.FC<ListingProps> = ({ tasks = [] }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="max-w-8xl mx-auto sm:mx-4 lg:mx-8" id="projects-listing">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl leading-8 font-semibold tracking-wide font-display text-gray-900 sm:text-3xl sm:leading-9">
          Zadania
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 row-gap-8 border-gray-400 rounded-md border">
        <div className="pt-8 xs:text-center sm:text-left border-gray-400">
          <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Filtry</h3>
          <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Sortowanie</h3>
        </div>
        <div
          id="projects-listing-section"
          className="border-t grid grid-cols-1 row-gap-6 lg:gap-5 xl:grid-cols-3"
        >
          <Cards tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
