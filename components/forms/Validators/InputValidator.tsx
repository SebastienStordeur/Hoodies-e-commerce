import React from "react";
import { Input } from "../../";
import Label from "./Label";
import { forwardRef } from "react";

interface InputValidatorProps {
  id: string;
  label: string;
  type: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

const InputValidator: React.FC<InputValidatorProps> = forwardRef(
  ({ id, label, type }, ref) => {
    return (
      <div className="relative flex flex-col my-2">
        <Label id={id} label={label} />
        <Input id={id} type={type} ref={ref} />
      </div>
    );
  }
);

export default InputValidator;
