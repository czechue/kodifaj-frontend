import React from 'react';
import { User } from '../../models/user/user.types';
import UserHero from '../user/userHero/UserHero';

interface UserPageProps {
  user: User;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
  const { _id, _solutions, _tasks, login, photo } = user;
  return (
    <div className="w-full">
      <UserHero login={login} photo={photo} />
    </div>
  );
};

export default UserPage;
