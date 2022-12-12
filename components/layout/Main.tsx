import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main id="main" className="w-full max-w-[1440px] mx-auto">
      {children}
    </main>
  );
};

export default Main;
