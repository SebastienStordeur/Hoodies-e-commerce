import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article className="overflow-hidden relative rounded-lg shadow-md max-w-xs mx-auto px-4 mb-8">
      {children}
    </article>
  );
};

export default Card;
