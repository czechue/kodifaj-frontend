import React, { useState } from 'react';
import TabButton from './tabButton/TabButton';
import UserTasks from './userTasks/UserTasks';
import { Task } from '../../../models/task/task.types';
import UserActivities from './userActivities/UserActivities';

interface UserDetailsProps {
  solutions?: string[];
  tasks?: Task[];
  login: string;
  photo?: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ solutions, tasks, login, photo }) => {
  const [activeTab, setActiveTab] = useState<'Tasks' | 'Solutions'>('Tasks');

  return (
    <div>
      <div className="bg-white w-full px-2 md:pl-4">
        <div className="max-w-8xl mx-auto h-full">
          <div className="flex justify-between">
            <div className="w-full md:w-2/3 flex justify-center md:justify-start md:ml-4">
              <TabButton label="Tasks" setActiveTab={setActiveTab} activeTab={activeTab} />
              <TabButton label="Solutions" setActiveTab={setActiveTab} activeTab={activeTab} />
            </div>
            <div className="hidden md:block md:w-1/3 md:ml-4">
              <h3 className="font-bold">Dotychczasowa aktywność</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:mr-4">
            {activeTab === 'Tasks' ? <UserTasks tasks={tasks} /> : <p>Solutions</p>}
          </div>
          <UserActivities login={login} photo={photo} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
