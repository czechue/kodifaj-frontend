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
          className="border-t border-gray-200 pt-8 grid grid-cols-1 row-gap-6 lg:grid-cols-3md lg:gap-5 xl:grid-cols-4"
        >
          <div className="xs:text-center sm:text-left">
            <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Filtry</h3>
            <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">
              Sortowanie
            </h3>
          </div>
          <Cards tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
