import React from 'react';
import { Task } from '../../../../models/task/task.types';
import Cards from '../../../listing/cards/Cards';

interface TasksProps {
  tasks?: Task[];
}

const UserTasks: React.FC<TasksProps> = ({ tasks }) => {
  if (!tasks) {
    return null;
  }

  return (
    <section>
      <Cards
        tasks={tasks}
        classNames="grid grid-cols-1 row-gap-4 col-gap-4 sm:grid-cols-2 xl:grid-cols-3 md:col-gap-6 md:row-gap-6"
      />
    </section>
  );
};

export default UserTasks;
