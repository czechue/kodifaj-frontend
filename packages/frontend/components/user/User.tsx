import React from 'react';
import UserHero from './hero/Hero';
import UserDetails from './details/Details';
import { Task, Solution } from '@kodifaj/common';

interface UserProps {
  solutions?: Solution[];
  login: string;
  photo?: string;
  tasks?: Task[];
}

const User: React.FC<UserProps> = ({ solutions, login, photo, tasks }) => {
  return (
    <div>
      <UserHero login={login} photo={photo} />
      <UserDetails solutions={solutions} tasks={tasks} login={login} photo={photo} />
    </div>
  );
};

export default User;
