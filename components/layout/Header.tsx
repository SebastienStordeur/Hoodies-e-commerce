import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="flex items-center w-full max-w-[1440px] h-24 mx-auto"
    >
      <Navbar />
    </header>
  );
};

export default Header;
