import React from 'react';
import NewSolutionForm from './newSolutionForm/NewSolutionForm';

interface NewSolutionModalProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewSolutionModal: React.FC<NewSolutionModalProps> = ({ setIsModalVisible }) => {
  return (
    <section className="fixed w-4/5 h-4/5 bg-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center shadow-lg">
      <h2 className="text-4xl font-bold">Dodaj swoje rozwiązanie</h2>
      <NewSolutionForm />
      <button
        type="button"
        className="absolute top-0 right-0 mr-2 mt-2"
        onClick={(): void => setIsModalVisible(false)}
      >
        X
      </button>
    </section>
  );
};

export default NewSolutionModal;
