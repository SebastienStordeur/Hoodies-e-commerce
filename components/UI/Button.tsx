import React from "react";

interface button {
  id?: string;
  children: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

const Button: React.FC<button> = ({ id, children, type, onClick }) => {
  return (
    <button id={id} className="w-10 h-4" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default React.memo(Button);
