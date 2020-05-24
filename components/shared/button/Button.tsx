import React, { MouseEvent } from 'react';
import clsx from 'clsx';

export enum ButtonType {
  Default = 'DEFAULT',
  Black = 'BLACK',
}

export enum ButtonSize {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Big = 'BIG',
}
interface ButtonProps {
  children: string;
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = ButtonType.Default,
  size = ButtonSize.Medium,
}) => {
  const ButtonStyles = clsx(
    'hover:bg-gray-100 transition-colors border rounded-md mx-4 shadow-sm transform translate-y-0 transition-transform duration-500 hover:-translate-y-1',
    type === ButtonType.Default && 'bg-white text-gray-700',
    type === ButtonType.Black && 'bg-gray-900 hover:bg-gray-800 text-white',
    size === ButtonSize.Small && 'h-10 w-20 md: w:32',
    size === ButtonSize.Medium && 'h-10 w-32 md: w:40',
    size === ButtonSize.Big && 'h-12 w-40 md: w:46',
  );
  return (
    <button type="button" className={ButtonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
