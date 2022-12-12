import { NextPage } from "next";
import React from "react";
import { Header } from "../components";
import { ProductSection } from "../components";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductSection />
    </React.Fragment>
  );
};

export default Home;
