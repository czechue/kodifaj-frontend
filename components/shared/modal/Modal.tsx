import React, { ReactNode } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, title, children, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <section className="fixed w-11/12 md:w-8/12 lg:w-5/12 h-auto py-10 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center shadow-lg">
          <div className="w-full flex flex-col justify-center items-start px-8">
            <h2 className="text-3xl font-bold self-start">{title}</h2>
            {children}
            <button
              type="button"
              className="absolute top-0 right-0 mr-2 mt-2"
              onClick={(): void => setIsOpen(false)}
            >
              <AiFillCloseSquare className="w-8 h-8 transform transition-transform duration-200 hover:scale-110" />
            </button>
          </div>
        </section>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
