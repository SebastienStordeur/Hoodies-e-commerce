import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <article className="overflow-hidden">{children}</article>;
};

export default Card;
