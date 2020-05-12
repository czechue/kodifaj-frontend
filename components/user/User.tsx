import React from 'react';
import { User } from '../../models/user/user.types';
import UserHero from '../user/userHero/UserHero';
import UserDetails from '../user/userDetails/UserDetails';
import { Task } from '../../models/task/task.types';

interface UserPageProps {
  user: User;
  tasks?: Task[];
}

const UserPage: React.FC<UserPageProps> = ({ user, tasks }) => {
  const { _solutions, login, photo } = user;
  return (
    <div>
      <UserHero login={login} photo={photo} />
      <UserDetails solutions={_solutions} tasks={tasks} login={login} photo={photo} />
    </div>
  );
};

export default UserPage;
