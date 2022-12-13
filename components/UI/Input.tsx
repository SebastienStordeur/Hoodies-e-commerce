import React, { forwardRef } from "react";

interface InputProps {
  id: string;
  type: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

const Input: React.FC<InputProps> = forwardRef(({ id, type }, ref) => {
  return <input id={id} className="h-10 w-full border" type={type} ref={ref} />;
});

export default React.memo(Input);
