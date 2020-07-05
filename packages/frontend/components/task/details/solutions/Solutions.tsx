import React, { useState } from 'react';
import Button, { ButtonLayout, ButtonSize } from '../../../shared/button/Button';
import Modal from '../../../shared/modal/Modal';
import { Solution } from '@kodifaj/common';
import SolutionDetails from '../../../shared/solution/Solution';
import SolutionForm from '../../../shared/solutionForm/SolutionForm';
import { useTaskState } from '../../../context/TaskDetailContext';


const Solutions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { _solutions: solutions } = useTaskState();
  const numberOfSolutions = solutions ? solutions.length : 0;

  return (
    <>
      <section className="mt-4">
        <h4 className="text-sm font-bold pb-3">Rozwiązania ({numberOfSolutions})</h4>
        <div className="flex flex-col items-center">
          {solutions &&
            solutions.map((solution, index) => <SolutionDetails key={index} solution={solution} />)}
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
        <SolutionForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

export default Solutions;
