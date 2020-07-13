import React, { useState } from 'react';
import TabButton, { TabTitle } from './tabButton/TabButton';
import UserTasks from './tasks/Tasks';
import UserActivities from './activities/Activities';
import UserSolutions from './solutions/Solutions';

const UserDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TabTitle.tasks);

  return (
    <>
      <div className="bg-white w-full px-2 md:pl-4">
        <div className="max-w-8xl mx-auto h-full">
          <div className="flex justify-between">
            <div className="w-full md:w-2/3 flex justify-center md:justify-start md:ml-4">
              <TabButton
                title={TabTitle.tasks}
                setActiveTab={setActiveTab}
                isActive={activeTab === TabTitle.tasks}
              >
                Zadania
              </TabButton>
              <TabButton
                title={TabTitle.solutions}
                setActiveTab={setActiveTab}
                isActive={activeTab === TabTitle.solutions}
              >
                Rozwiązania
              </TabButton>
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
            {activeTab === TabTitle.tasks ? <UserTasks /> : <UserSolutions />}
          </div>
          <UserActivities />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
