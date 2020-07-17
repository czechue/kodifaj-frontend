import React from 'react';
import { useUserDetailDispatch } from '../context/UserDetailContext';
import { useUser } from '../context/UserContext';
import { getUser } from '../shared/solutionForm/utils/getUser';
import SolutionForm from '../shared/solutionForm/SolutionForm';

interface SolutionFormForUserProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  repoLink?: string;
  liveLink?: string;
  technologies?: string[];
  phase?: string;
  solutionId?: string;
  taskId: string;
}

const SolutionFormForUser: React.FC<SolutionFormForUserProps> = (props) => {
  const user = useUser();
  const updateUserSolutions = useUserDetailDispatch();
  const { setIsModalOpen } = props;

  const refreshSolutions = () => {
    const userId = user._id;
    if (userId) {
      getUser(userId).then((res) => updateUserSolutions(res));
    }
    setIsModalOpen(false);
  };

  return <SolutionForm {...props} refreshSolutions={refreshSolutions} />;
};

export default SolutionFormForUser;
