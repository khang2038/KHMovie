import React from 'react'

interface IButtonProps {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ children, onClick, className, type, ...rest }: IButtonProps) => {
  return (
    <button
      type={type}
      className={`inline-flex justify-center items-center rounded border-transparent text-2xl font-medium ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
