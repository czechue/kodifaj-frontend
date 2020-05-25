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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    title,
    _user: { login },
    createdAt,
    tags,
    images,
  } = task;
  return (
    <>
      <div className={isModalVisible ? 'pointer-events-none opacity-25' : ''}>
        <Header />
        <Hero title={title} author={login} creationTime={createdAt} tags={tags} />
        <TaskDetails images={images} setIsModalVisible={setIsModalVisible} />
      </div>
      {isModalVisible && (
        <Modal setIsModalVisible={setIsModalVisible} title="Dodaj swoje rozwiązanie">
          <NewSolutionForm />
        </Modal>
      )}
    </>
  );
};

export default TaskComponent;
