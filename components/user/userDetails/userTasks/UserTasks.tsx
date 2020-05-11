import React from 'react';
import { Task } from '../../../../models/task/task.types';
import Cards from '../../../listing/cards/Cards';

interface TasksProps {
  tasks?: Task[];
}

const UserTasks: React.FC<TasksProps> = ({ tasks }) => {
  return <section>{tasks && <Cards tasks={tasks} />}</section>;
};

export default UserTasks;
