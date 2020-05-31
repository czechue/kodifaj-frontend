import React from 'react';
import { Task } from '../../models/task/task.types';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Header from '../header/Header';

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const {
    title,
    _user: { login },
    createdAt,
    tags,
    images,
    content,
  } = task;
  return (
    <>
      <Header />
      <Hero title={title} author={login} creationTime={createdAt} tags={tags} />
      <TaskDetails images={images} content={content} />
    </>
  );
};

export default TaskComponent;
