import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <span className="h-10 min-w-full p-2 font-semibold bg-red text-xs text-white">
      {message}
    </span>
  );
};

export default ErrorMessage;
