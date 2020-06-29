import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';
import clsx from 'clsx';
import Modal from '../modal/Modal';
import { Solution } from '@kodifaj/common';
import Badges from '../../badges/Badges';
import { useUser } from '../../context/UserContext';
import SolutionForm from '../solutionForm/SolutionForm';

export enum SolutionDetailsLayout {
  Default = 'DEFAULT',
  WithTitle = 'TITLE',
}
interface SolutionProps {
  solution: Solution;
  updateSolutions?: (solutions: Solution[]) => void;
  layout?: SolutionDetailsLayout;
}

const SolutionDetails: React.FC<SolutionProps> = ({
  solution,
  updateSolutions,
  layout = SolutionDetailsLayout.Default,
}) => {
  const {
    _id: solutionId,
    repo,
    demo,
    phase,
    _user: { photo, login, _id },
    _task: { title, _id: taskId },
    createdAt,
    technologies,
  } = solution;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const TitleStyles = clsx(
    layout === SolutionDetailsLayout.Default ? 'hidden' : 'mt-2 mb-4 text-center text-blue-700',
  );

  const currentUser = useUser();
  const isEditable = currentUser && currentUser._id === _id;

  return (
    <>
      <section className="w-full max-w-screen-sm border border-gray-400 rounded-md flex flex-col px-2 py-4 relative bg-white shadow-xs my-2">
        <p className="text-sm underline italic absolute top-0 right-0 mr-2 mt-2">
          {createdAt.slice(0, 10)}
        </p>
        <div className="flex items-center justify-end mb-4 mt-4">
          <div className="-mt-4">
            <Badges tags={technologies ? technologies : undefined} />
          </div>
        </div>
        <h4 className={TitleStyles}>{title}</h4>
        <div className="flex justify-center md:justify-between items-center">
          <img
            src={photo && photo}
            title={`${login}`}
            alt={`${login} photo`}
            className="w-5 md:w-8 h-5 md:h-8 rounded-full mr-8 absolute top-0 left-0 ml-2 mt-2 "
          />
          <div className="w-full flex justify-around md:justify-end">
            {isEditable && (
              <button onClick={(): void => setIsModalOpen(true)} title="Edytuj">
                <FaEdit className="w-6 h-6 transform transition-transform duration-500 hover:scale-110 text-gray-600 lg:absolute lg:bottom-0 lg:left-0 lg:ml-2 lg:mb-2" />
              </button>
            )}
            <a
              href="/"
              className="w-32 flex justify-between items-center border-gray-400 border rounded-md p-1 text-sm md:mr-4 hover:underline"
            >
              <FaGithub className="w-6 h-6 mr-2" />
              Kod źródłowy
            </a>
            <a
              href="/"
              className="w-32 flex w-14 justify-between items-center border-gray-400 border rounded-md p-1 text-sm hover:underline"
            >
              <MdLiveTv className="w-6 h-6 mr-2" />
              Wersja live
            </a>
          </div>
        </div>
      </section>
      <Modal setIsOpen={setIsModalOpen} title="Dodaj swoje rozwiązanie" isOpen={isModalOpen}>
        <SolutionForm
          setIsModalOpen={setIsModalOpen}
          taskId={taskId}
          repoLink={repo}
          liveLink={demo}
          techs={technologies}
          phase={phase}
          solutionId={solutionId}
          updateSolutions={updateSolutions && updateSolutions}
        />
      </Modal>
    </>
  );
};

export default SolutionDetails;
