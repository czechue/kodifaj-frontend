import React from 'react';
import { User } from '../../models/user/user.types';
import UserHero from '../user/userHero/UserHero';
import UserDetails from '../user/userDetails/UserDetails';

interface UserPageProps {
  user: User;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
  const { _id, _solutions, _tasks, login, photo } = user;
  return (
    <div className="w-full h-full">
      <UserHero login={login} photo={photo} />
      <UserDetails id={_id} solutions={_solutions} tasks={_tasks} />
    </div>
  );
};

export default UserPage;
