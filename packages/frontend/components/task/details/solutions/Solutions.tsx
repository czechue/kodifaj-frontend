import React, { useState } from 'react';
import Button, { ButtonLayout, ButtonSize } from '../../../shared/button/Button';
import Modal from '../../../shared/modal/Modal';
import { Solution } from 'lib/models/solution/solution';
import SolutionDetails from 'components/shared/solution/Solution';
import NewSolutionForm from 'components/shared/solutionForm/SolutionForm';

interface SolutionsProps {
  solutions?: Solution[];
  taskId: string;
  updateSolutions: (solutions: Solution[]) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ solutions, taskId, updateSolutions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const numberOfSolutions = solutions ? solutions.length : 0;

  return (
    <>
      <section className="mt-4">
        <h4 className="text-sm font-bold pb-3">Rozwiązania ({numberOfSolutions})</h4>
        <div className="flex flex-col items-center">
          {solutions &&
            solutions.map((solution, index) => (
              <SolutionDetails key={index} solution={solution} updateSolutions={updateSolutions} />
            ))}
        </div>
        <div className="text-center my-8">
          <Button
            type="button"
            layout={ButtonLayout.Black}
            size={ButtonSize.Big}
            onClick={(): void => setIsModalOpen(true)}
          >
            Dodaj rozwiązanie
          </Button>
        </div>
      </section>
      <Modal setIsOpen={setIsModalOpen} title="Dodaj swoje rozwiązanie" isOpen={isModalOpen}>
        <NewSolutionForm
          setIsModalOpen={setIsModalOpen}
          taskId={taskId}
          updateSolutions={updateSolutions}
        />
      </Modal>
    </>
  );
};

export default Solutions;
