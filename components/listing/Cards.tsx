import React from 'react';
import Card from './Card';
import { Task } from '../../models/task.types';

interface CardsProps {
  tasks: Task[];
}

const Cards: React.FC<CardsProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-1 row-gap-8 pb-8 col-gap-8 sm:grid-cols-2 sm:col-gap-5 sm:row-gap-6 md:grid-cols-3 xl:grid-cols-3 xl:col-span-3 mx-4 mb-8">
      {tasks.map((task) => (
        <Card key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Cards;
