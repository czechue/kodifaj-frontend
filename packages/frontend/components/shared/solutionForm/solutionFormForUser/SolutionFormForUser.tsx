import React from 'react';
import { useUserDetailDispatch } from '../../../context/UserDetailContext';
import { useUser } from '../../../context/UserContext';
import { getUser } from '../utils/getUser';
import SolutionForm from '../SolutionForm';

interface SolutionFormForUserProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  repoLink?: string;
  liveLink?: string;
  techs?: string[];
  phase?: string;
  solutionId?: string;
  taskId: string;
}

const SolutionFormForUser: React.FC<SolutionFormForUserProps> = ({
  setIsModalOpen,
  repoLink,
  liveLink,
  techs,
  phase,
  solutionId,
  taskId,
}) => {
  const user = useUser();
  const updateUserSolutions = useUserDetailDispatch();

  const refreshSolutions = async () => {
    const userId = user._id;
    if (userId) {
      const updatedSolutions = await getUser(userId);
      updateUserSolutions(updatedSolutions);
    }
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
      // onSubmit={onSubmit}
    />
  );
};

export default SolutionFormForUser;
