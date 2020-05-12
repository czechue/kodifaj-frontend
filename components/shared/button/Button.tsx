import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  black?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, black }) => {
  const ButtonStyles = clsx(
    'hover:bg-gray-100 transition-colors border h-10 w-32 md:w-40 rounded-md mx-4 shadow-sm transform translate-y-0 transition-transform duration-500 hover:-translate-y-1',
    black ? 'bg-black hover:bg-gray-800 text-white' : 'bg-white text-gray-700',
  );
  return <button className={ButtonStyles}>{label}</button>;
};

export default Button;
