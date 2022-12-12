import React from "react";

interface button {
  className?: string;
  id?: string;
  children: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

const Button: React.FC<button> = ({
  className,
  id,
  children,
  type,
  onClick,
}) => {
  return (
    <button
      id={id}
      className={`w-full h-10 bg-green text-white font-semibold tracking-wide ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
