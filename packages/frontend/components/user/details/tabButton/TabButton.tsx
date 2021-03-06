import React from 'react';
import clsx from 'clsx';

interface TabButtonProps {
  title: TabTitle;
  isActive: boolean;
  setActiveTab: (x: TabTitle) => void;
}

export enum TabTitle {
  tasks = 'TASKS',
  solutions = 'SOLUTIONS',
}

const TabButton: React.FC<TabButtonProps> = ({ title, setActiveTab, isActive, children }) => {
  const tabButtonStyles = clsx(
    'w-5/12 md:w-40 border-b border-gray-300 bg-white hover:bg-gray-100 transition-colors mx-1',
    isActive && 'border-b-2 border-gray-900 font-bold',
  );

  return (
    <button type="button" className={tabButtonStyles} onClick={(): void => setActiveTab(title)}>
      {children}
    </button>
  );
};

export default TabButton;
