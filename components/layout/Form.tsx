import React, { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, title, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
    </form>
  );
};

export default Form;
