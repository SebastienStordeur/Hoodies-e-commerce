import React from "react";

interface button {
  id?: string;
  children: string;
  onClick?: () => void;
}

const Button: React.FC<button> = ({ id, children, onClick }) => {
  return (
    <button id={id} className="w-10 h-4" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
