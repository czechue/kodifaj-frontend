import React, { useState } from 'react';
import TabButton from './tabButton/TabButton';
import UserTasks from './userTasks/UserTasks';
import { Task } from '../../../models/task/task.types';

interface UserDetailsProps {
  id: string;
  solutions?: string[];
  tasks?: Task[];
}

const UserDetails: React.FC<UserDetailsProps> = ({ id, solutions, tasks }) => {
  const [activeTab, setActiveTab] = useState<'Tasks' | 'Solutions'>('Tasks');

  return (
    <div>
      <div className="bg-white w-full px-4">
        <div className="max-w-8xl mx-auto h-full">
          <div className="flex justify-between">
            <div className="w-2/3">
              <TabButton label="Tasks" setActiveTab={setActiveTab} activeTab={activeTab} />
              <TabButton label="Solutions" setActiveTab={setActiveTab} activeTab={activeTab} />
            </div>
            <div className="w-1/3 font-bold">
              <h3>Dotychczasowa aktywność</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex">
          <div className="w-2/3">
            {activeTab === 'Tasks' ? <UserTasks tasks={tasks} /> : <p>Solutions</p>}
          </div>
          <div className="w-1/3">33%</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
