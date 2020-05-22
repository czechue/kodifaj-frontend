import React from 'react';
import Card from '../card/Card';
import { Task } from '../../../lib/models/task/task';

interface CardsProps {
  tasks: Task[];
}

const Cards: React.FC<CardsProps> = ({ tasks }) => {
  const cardsStyles = `grid grid-cols-1 sm:grid-cols-2 col-gap-4 row-gap-4 xl:grid-cols-3 xl:col-span-3 mx-4 mb-8`;
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
