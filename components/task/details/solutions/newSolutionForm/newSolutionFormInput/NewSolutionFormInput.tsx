import React from 'react';

interface NewSolutionFormInputProps {
  children: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewSolutionFormInput: React.FC<NewSolutionFormInputProps> = ({
  name,
  value,
  onChange,
  children,
}) => {
  return (
    <div className="flex flex-col pt-4 w-full">
      <label htmlFor={name} className="text-xs mb-1 text-gray-600">
        {children}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        className="w-full h-10 border rounded-sm px-2 bg-gray-200"
        onChange={onChange}
      />
    </div>
  );
};

export default NewSolutionFormInput;
