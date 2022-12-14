import Image from "next/image";
import React from "react";
import { user } from "../../assets";
import Logo from "./Logo/Logo";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/index";
import { authActions } from "../../redux/auth/auth";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authActions.logout());
    }
  };

  return (
    <nav
      id="main-nav"
      className="flex justify-between items-center w-full h-20 px-6 border-b-2"
    >
      <Logo />
      <div>
        {!isAuthenticated && (
          <Link href="/signin" className="flex p-1">
            <React.Fragment>
              <Image src={user} alt="User icon" width={24} height={24} />
              <h2 className="hidden sm:block ml-2 cursor-pointer">Sign In</h2>
            </React.Fragment>
          </Link>
        )}
        {isAuthenticated && (
          <span className="flex p-1" onClick={logout}>
            <Image src={user} alt="User icon" width={24} height={24} />
            <h2 className="hidden sm:block ml-2 cursor-pointer">Logout</h2>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
