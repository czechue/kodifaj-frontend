import React, { ReactNode, PropsWithChildren } from 'react';
import clsx from 'clsx';

export enum ButtonType {
  Default = 'DEFAULT',
  Black = 'BLACK',
}
interface ButtonProps {
  type?: ButtonType;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type = ButtonType.Default,
}) => {
  const ButtonStyles = clsx(
    'hover:bg-gray-100 transition-colors border h-10 w-32 md:w-40 rounded-md mx-4 shadow-sm transform translate-y-0 transition-transform duration-500 hover:-translate-y-1',
    type === ButtonType.Default && 'bg-white text-gray-700',
    type === ButtonType.Black && 'bg-gray-900 hover:bg-gray-800 text-white',
  );
  return (
    <button type="button" className={ButtonStyles}>
      {children}
    </button>
  );
};

export default Button;
