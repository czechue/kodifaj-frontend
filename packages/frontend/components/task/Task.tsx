import React from 'react';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Header from '../header/Header';
import { Task } from '@kodifaj/common';

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  if (!task) {
    return null;
  }

  const { title, _user, createdAt, tags, images, content } = task;
  return (
    <>
      <Header />
      <Hero title={title} author={_user} creationTime={createdAt} tags={tags} />
      <TaskDetails images={images} content={content} />
    </>
  );
};

export default TaskComponent;
