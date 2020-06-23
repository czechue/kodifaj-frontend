import React from 'react';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Header from '../header/Header';
import { Task } from 'lib/models/task/Task';
import { Solution } from 'lib/models/solution/solution';

interface TaskProps extends Task {
  updateSolutions: (solutions: Solution[]) => void;
}

const TaskComponent: React.FC<TaskProps> = ({
  title,
  _user,
  createdAt,
  tags,
  images,
  content,
  _id,
  _solutions,
  updateSolutions,
}) => {
  return (
    <>
      <Header />
      <Hero title={title} author={_user} creationTime={createdAt} tags={tags} />
      <TaskDetails
        images={images}
        content={content}
        taskId={_id}
        solutions={_solutions}
        updateSolutions={updateSolutions}
      />
    </>
  );
};

export default TaskComponent;
