import React from 'react';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Header from '../header/Header';
<<<<<<< HEAD:components/task/Task.tsx
import { Task } from 'lib/models/task/Task';
import { Solution } from 'lib/models/solution/solution';
=======
import { Task } from '@kodifaj/common';
>>>>>>> new-master:packages/frontend/components/task/Task.tsx

interface TaskProps extends Task {
  updateSolutions: (solutions: Solution[]) => void;
}

<<<<<<< HEAD:components/task/Task.tsx
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
=======
const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  if (!task) {
    return null;
  }

  const { title, _user, createdAt, tags, images, content } = task;
>>>>>>> new-master:packages/frontend/components/task/Task.tsx
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
