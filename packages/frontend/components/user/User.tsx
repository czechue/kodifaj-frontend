import React from 'react';
import UserHero from './hero/Hero';
import UserDetails from './details/Details';
<<<<<<< HEAD:components/user/User.tsx
import { Task } from '../../lib/models/task/Task';
import { Solution } from 'lib/models/solution/solution';
=======
import { Task } from '@kodifaj/common';
>>>>>>> new-master:packages/frontend/components/user/User.tsx

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
