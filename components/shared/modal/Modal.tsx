import React, { ReactNode } from 'react';

interface ModalProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ setIsModalVisible, title, children }) => {
  return (
    <section className="fixed w-11/12 md:w-8/12 lg:w-5/12 h-auto py-10 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center shadow-lg">
      <div className="w-full flex flex-col justify-center items-start px-8">
        <h2 className="text-3xl font-bold self-start">{title}</h2>
        {children}
        <button
          type="button"
          className="absolute top-0 right-0 mr-2 mt-2"
          onClick={(): void => setIsModalVisible(false)}
        >
          X
        </button>
      </div>
    </section>
  );
};

export default Modal;
