import React from 'react';
import Cards from '../../../listing/cards/Cards';
import { Task } from '../../../../lib/models/task/Task';

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
