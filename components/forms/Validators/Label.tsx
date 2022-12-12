import React from "react";

interface LabelProps {
  id: string;
  label: string;
}

const Label: React.FC<LabelProps> = ({ id, label }) => {
  return (
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
  );
};

export default Label;
