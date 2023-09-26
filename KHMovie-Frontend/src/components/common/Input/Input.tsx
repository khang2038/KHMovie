import React, { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FC<IInputProps> = (props) => {
  const {
    type = 'text',
    value,
    placeholder = '',
    onChange,
    className,
    name,
    ...passProps
  } = props;
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      {...passProps}
      required
      className={`appearance-none border-2 border-primary text-gray-950 placeholder:text-slate-gray leading-tight focus:outline-none focus:shadow-outline ${className}`}
    />
  );
};

export default Input;
