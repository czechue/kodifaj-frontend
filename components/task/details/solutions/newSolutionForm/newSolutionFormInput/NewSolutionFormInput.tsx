import React from 'react';

interface NewSolutionFormInputProps {
  children: string;
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewSolutionFormInput: React.FC<NewSolutionFormInputProps> = ({
  children,
  id,
  handleChange,
}) => {
  return (
    <div className="flex flex-col pt-4 w-full">
      <label htmlFor={id} className="text-xs mb-1 text-gray-600">
        {children}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        className="w-full h-10 border rounded-sm px-2 bg-gray-200"
        onChange={handleChange}
      />
    </div>
  );
};

export default NewSolutionFormInput;
