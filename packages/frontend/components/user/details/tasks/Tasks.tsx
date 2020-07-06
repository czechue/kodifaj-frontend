import React from 'react';
import Cards from '../../../listing/cards/Cards';
import { Task } from '@kodifaj/common';
import { useUserDetailState } from '../../../context/UserDetailContext';

const UserTasks: React.FC = () => {
  const { _tasks } = useUserDetailState();
  console.log(_tasks)

  if (!_tasks) {
    return null;
  }

  return <Cards tasks={_tasks} />;
};

export default UserTasks;
