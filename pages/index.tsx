import { NextPage } from "next";
import React from "react";
import { Header, Section } from "../components";
import Product from "../components/products/Product";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Section id="product-section">
        <Product
          imageCover="/hoodie.webp"
          title="Hoodie Yellow XL"
          price="49.99"
        />
        <Product
          imageCover="/hoodie.webp"
          title="Hoodie Yellow XL"
          price="49.99"
        />
      </Section>
    </React.Fragment>
  );
};

export default Home;
