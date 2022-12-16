import Image from "next/image";
import React, { useState } from "react";
import { user, cartIcon } from "../../assets";
import Logo from "./Logo/Logo";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/index";
import { authActions } from "../../redux/auth/auth";
import CartModal from "../cart/CartModal";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  const logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authActions.logout());
    }
  };

  const toggleCartHandler = () => {
    setCartIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
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
            <div className="flex items-center">
              <span className="relative" onClick={toggleCartHandler}>
                <Image
                  src={cartIcon}
                  alt="Cart icon"
                  width={24}
                  height={24}
                  className="aspect-square"
                />
                <span className="absolute -top-4 left-2.5">{quantity}</span>
              </span>
              <span className="flex p-1 ml-4" onClick={logout}>
                <Image src={user} alt="User icon" width={24} height={24} />
                <h2 className="hidden sm:block ml-2 cursor-pointer">Logout</h2>
              </span>
            </div>
          )}
        </div>
      </nav>
      {cartIsOpen && <CartModal />}
    </React.Fragment>
  );
};

export default Navbar;
