import { NextPage } from "next/types";
import React, { useEffect } from "react";
import { Header, Main, SigninForm } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index";
import { useRouter } from "next/router";

const Signin: NextPage = () => {
  const router = useRouter();
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <SigninForm />
      </Main>
    </React.Fragment>
  );
};
export default Signin;
