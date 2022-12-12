import React, { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, title, onSubmit }) => {
  return (
    <form
      className="shadow-md w-full max-w-96 mx-auto mt-8 px-8 py-12"
      onSubmit={onSubmit}
    >
      <h3 className="font-bold text-xl mb-8">{title}</h3>
      {children}
    </form>
  );
};

export default Form;
