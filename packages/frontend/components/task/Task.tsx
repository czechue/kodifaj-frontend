import React from 'react';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Header from '../header/Header';
import { Task, Solution } from '@kodifaj/common';
import { useTaskState } from '../context/TaskDetailContext';

const TaskComponent: React.FC = () => {

  return (
    <>
      <Header />
      <Hero />
      <TaskDetails />
    </>
  );
};

export default TaskComponent;
