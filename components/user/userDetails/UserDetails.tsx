import React from 'react';

interface UserDetailsProps {
  id: string;
  solutions?: string[];
  tasks?: string[];
}

const UserDetails: React.FC<UserDetailsProps> = ({ id, solutions, tasks }) => {
  return (
    <div>
      <div className="bg-white w-full px-4">
        <div className="max-w-8xl mx-auto h-full">
          <div className="flex justify-between">
            <div className="w-2/3">
              <button className="w-40 border-b-2 border-gray-900 mr-1 pb-2">Moje zadania</button>
              <button className="w-40 border-b-1 border-gray-300">Moje rozwiązania</button>
            </div>
            <div className="w-1/3 font-bold">
              <h3>Dotychczasowa aktywność</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex">
          <div className="w-2/3 bg-blue-100">66%</div>
          <div className="w-1/3 bg-red-100">33%</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
