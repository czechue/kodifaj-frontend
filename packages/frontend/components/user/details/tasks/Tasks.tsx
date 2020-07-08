import React from 'react';
import Cards from '../../../listing/cards/Cards';
import { useUserDetailState } from '../../../context/UserDetailContext';

const UserTasks: React.FC = () => {
  const { tasks } = useUserDetailState();

  if (!tasks) {
    return null;
  }

  return <Cards tasks={tasks} />;
};

export default UserTasks;
