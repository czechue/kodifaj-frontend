import React from 'react';
import clsx from 'clsx';

interface TabButtonProps {
  label: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabButton: React.FC<TabButtonProps> = ({ label, setActiveTab, activeTab }) => {
  const tabButtonStyles = clsx(
    'w-5/12 md:w-40 border-b border-gray-300 bg-white hover:bg-gray-100 transition-colors',
    activeTab === label && 'border-b-2 border-gray-900 font-bold',
  );

  const handleChangeTab = (tab: string): void => {
    return setActiveTab(tab);
  };

  return (
    <button className={tabButtonStyles} onClick={(): void => handleChangeTab(label)}>
      {label}
    </button>
  );
};

export default TabButton;
