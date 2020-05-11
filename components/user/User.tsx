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
  console.log(tasks);
  const { _id, _solutions, login, photo } = user;
  return (
    <div className="w-full h-full">
      <UserHero login={login} photo={photo} />
      <UserDetails id={_id} solutions={_solutions} tasks={tasks} />
    </div>
  );
};

export default UserPage;
