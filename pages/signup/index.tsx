import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Header, Main, SignupForm } from "../../components";

const Signup: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>Hoodies - Signup</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Create your account to Hoodies"
          data-react-helmet="true"
        />
      </Head>
      <Header />
      <Main>
        <SignupForm />
      </Main>
    </React.Fragment>
  );
};

export default Signup;
