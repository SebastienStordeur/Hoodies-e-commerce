import { NextPage } from "next";
import React from "react";
import { Header, Main, SignupForm } from "../../components";

const Signup: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <SignupForm />
      </Main>
    </React.Fragment>
  );
};

export default Signup;
