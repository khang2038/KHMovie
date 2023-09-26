import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, onClick, className, type, ...rest } = props;
  return (
    <button
      type={type}
      className={`inline-flex justify-center items-center rounded border-transparent text-2xl font-medium ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
