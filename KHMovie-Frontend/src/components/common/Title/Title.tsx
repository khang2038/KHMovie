import React from 'react';

interface ITitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

const Title: React.FC<ITitleProps> = ({ children, className, level = 1 }) => {
  const HeadingComponent = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingComponent className={`font-semibold text-white ${className}`}>
      {children}
    </HeadingComponent>
  );
};

export default Title;