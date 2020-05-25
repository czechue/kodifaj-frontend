import React, { useState } from 'react';
import { Task } from '../../models/task/task.types';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';
import Modal from '../shared/modal/Modal';
import Header from '../header/Header';
import NewSolutionForm from './details/solutions/newSolutionForm/NewSolutionForm';

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    title,
    _user: { login },
    createdAt,
    tags,
    images,
  } = task;
  return (
    <>
      <Header />
      <Hero title={title} author={login} creationTime={createdAt} tags={tags} />
      <TaskDetails images={images} setisModalOpen={setIsModalOpen} />
      <Modal setIsOpen={setIsModalOpen} title="Dodaj swoje rozwiązanie" isOpen={isModalOpen}>
        <NewSolutionForm />
      </Modal>
    </>
  );
};

export default TaskComponent;
