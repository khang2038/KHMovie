import React from 'react'

interface IInputProps {
  type?: 'text' | 'password' | 'email' | 'number'
  value?: string
  placeholder?: string
  className?: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ type = 'text', value, placeholder = '', onChange, className, name, ...passProps }: IInputProps) => {
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
  )
}

export default Input
