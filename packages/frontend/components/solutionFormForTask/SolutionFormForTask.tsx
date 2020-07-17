import React from 'react';
import { getSolutions } from '../shared/solutionForm/utils/getSolutions';
import SolutionForm from '../shared/solutionForm/SolutionForm';
import { useTaskDispatch } from '../context/TaskDetailContext';

interface SolutionFormForTaskProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  repoLink?: string;
  liveLink?: string;
  technologies?: string[];
  phase?: string;
  solutionId?: string;
  taskId: string;
}

const SolutionFormForTask: React.FC<SolutionFormForTaskProps> = (props) => {
  const updateTaskSolutions = useTaskDispatch();
  const { setIsModalOpen, taskId } = props;

  const refreshSolutions = () => {
    getSolutions(taskId).then((res) => updateTaskSolutions({ solutions: res }));
    setIsModalOpen(false);
  };

  return <SolutionForm {...props} refreshSolutions={refreshSolutions} />;
};

export default SolutionFormForTask;
