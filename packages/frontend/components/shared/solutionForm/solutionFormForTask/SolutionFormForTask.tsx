import React from 'react';
import { getSolutions } from '../utils/getSolutions';
import SolutionForm from '../SolutionForm';
import { useTaskDispatch } from '../../../context/TaskDetailContext';

interface SolutionFormForTaskProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  repoLink?: string;
  liveLink?: string;
  techs?: string[];
  phase?: string;
  solutionId?: string;
  taskId: string;
}

const SolutionFormForTask: React.FC<SolutionFormForTaskProps> = ({
  setIsModalOpen,
  repoLink,
  liveLink,
  techs,
  phase,
  solutionId,
  taskId,
}) => {
  const updateTaskSolutions = useTaskDispatch();

  const refreshSolutions = async () => {
    const updatedSolutions = await getSolutions(taskId);
    updateTaskSolutions({ solutions: updatedSolutions });
    setIsModalOpen(false);
  };

  return (
    <SolutionForm
      setIsModalOpen={setIsModalOpen}
      repoLink={repoLink}
      liveLink={liveLink}
      techs={techs}
      phase={phase}
      solutionId={solutionId}
      taskId={taskId}
      refreshSolutions={refreshSolutions}
    />
  );
};

export default SolutionFormForTask;
