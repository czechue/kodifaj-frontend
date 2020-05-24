import React, { useState } from 'react';
import { Task } from '../../../models/task/task.types';
import Gallery from './gallery/Gallery';
import Solutions from './solutions/Solutions';
import Description from './description/Description';
import NewSolutionModal from './solutions/newSolutionModal/NewSolutionModal';

interface TaskDetailsProps {
  solutions?: string[];
  tasks?: Task[];
  login?: string;
  photo?: string;
  images?: string[];
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  solutions,
  tasks,
  login,
  photo,
  images,
  setIsModalVisible,
}) => {
  return (
    <>
      <div className="max-w-8xl mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:mr-4">
            <Description />
          </div>
          <div className="w-full md:w-1/3">
            <Gallery images={images} />
            <Solutions solutions={solutions} setIsModalVisible={setIsModalVisible} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
