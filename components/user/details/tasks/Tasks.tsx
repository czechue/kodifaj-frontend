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

  return <Cards tasks={tasks} />;
};

export default UserTasks;
