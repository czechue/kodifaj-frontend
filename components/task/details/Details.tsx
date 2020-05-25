import React from 'react';
import { Task } from '../../../models/task/task.types';
import Gallery from './gallery/Gallery';
import Solutions from './solutions/Solutions';
import Description from './description/Description';

interface TaskDetailsProps {
  solutions?: string[];
  tasks?: Task[];
  login?: string;
  photo?: string;
  images?: string[];
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  solutions,
  tasks,
  login,
  photo,
  images,
  setisModalOpen,
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
            <Solutions solutions={solutions} setisModalOpen={setisModalOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
