import Image from "next/image";
import React from "react";
import { user } from "../../assets";
import Logo from "./Logo/Logo";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav
      id="main-nav"
      className="flex justify-between items-center w-full h-20 px-6"
    >
      <Logo />
      <div>
        <Link href="/signin" className="flex p-1">
          <Image src={user} alt="User icon" width={24} height={24} />
          <h2 className="hidden sm:block ml-2 cursor-pointer">Sign In</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
