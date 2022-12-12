import React from "react";

interface InputProps {
  id: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, type }) => {
  return <input id={id} className="h-10 w-full border" type={type} />;
};

export default React.memo(Input);
