import React from 'react';
import UserHero from './hero/Hero';
import UserDetails from './details/Details';

const User: React.FC = () => {
  return (
    <div>
      <UserHero />
      <UserDetails />
    </div>
  );
};

export default User;
