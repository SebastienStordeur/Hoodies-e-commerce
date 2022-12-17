import { NextPage } from "next/types";
import React, { useEffect } from "react";
import { Header, Main, SigninForm } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index";
import { useRouter } from "next/router";
import Head from "next/head";

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
      <Head>
        <meta charSet="utf-8" />
        <title>Hoodies - Login</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Login to Hoodies and start to buy your favorite clothes"
          data-react-helmet="true"
        />
      </Head>
      <Header />
      <Main>
        <SigninForm />
      </Main>
    </React.Fragment>
  );
};
export default Signin;
