import React, { ReactNode } from "react";
import { Input } from "../../";
import Label from "./Label";

interface InputValidatorProps {
  id: string;
  label: string;
  type: string;
}

const InputValidator: React.FC<InputValidatorProps> = ({ id, label, type }) => {
  return (
    <div className="relative flex flex-col my-2">
      <Label id={id} label={label} />
      <Input id={id} type={type} />
    </div>
  );
};

export default InputValidator;
