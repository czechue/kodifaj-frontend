import React from 'react';
import Card from '../card/Card';
import { Task } from '../../../models/task/task.types';
import clsx from 'clsx';

interface CardsProps {
  tasks: Task[];
  classNames?: string;
}

const Cards: React.FC<CardsProps> = ({ tasks, classNames }) => {
  const cardsStyles = clsx(
    `grid grid-cols-1 row-gap-8 col-gap-8 sm:grid-cols-2 sm:col-gap-5 sm:row-gap-6  xl:grid-cols-3 xl:col-span-3 mx-4 mb-8 md:grid-cols-3 ${classNames}`,
  );
  return (
    <div className={cardsStyles}>
      {tasks.map((task) => {
        const { _id, _user, images, title, tags, createdAt } = task;
        return (
          <Card
            key={_id}
            _id={_id}
            _user={_user}
            images={images}
            title={title}
            tags={tags}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
};

export default Cards;
