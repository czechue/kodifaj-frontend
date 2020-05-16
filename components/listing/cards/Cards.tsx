import React from 'react';
import Card from '../card/Card';
import { Task } from '../../../lib/models/task/task';

interface CardsProps {
  tasks: Task[];
}

const Cards: React.FC<CardsProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-1 row-gap-8 col-gap-8 sm:grid-cols-2 sm:col-gap-5 sm:row-gap-6 md:grid-cols-3 xl:grid-cols-3 xl:col-span-3 mx-4 mb-8">
      {tasks.map((task) => (
        <Card key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Cards;
