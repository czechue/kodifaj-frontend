import React from 'react';
import clsx from 'clsx';

interface TabButtonProps {
  label: 'Tasks' | 'Solutions';
  activeTab: 'Tasks' | 'Solutions';
  setActiveTab: React.Dispatch<React.SetStateAction<'Tasks' | 'Solutions'>>;
}

const TabButton: React.FC<TabButtonProps> = ({ label, setActiveTab, activeTab }) => {
  const tabButtonStyles = clsx(
    'w-40 border-b border-gray-300',
    activeTab === label && 'border-b-2 border-gray-900',
  );

  const handleChangeTab = (tab: 'Tasks' | 'Solutions'): void => {
    return setActiveTab(tab);
  };

  return (
    <button className={tabButtonStyles} onClick={(): void => handleChangeTab(label)}>
      {label}
    </button>
  );
};

export default TabButton;
