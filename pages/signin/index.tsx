import { NextPage } from "next/types";
import React from "react";
import { Header, Main, SigninForm } from "../../components";

const Signin: NextPage = () => {
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
