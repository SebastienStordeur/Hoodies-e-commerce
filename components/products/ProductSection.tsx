import React from "react";
import { Section } from "../";
import Product from "./Product";

const ProductSection: React.FC = () => {
  return (
    <Section
      id="product-section"
      className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <Product
        imageCover="/assets/H1 BLACK.png"
        title="Hoodie Yellow XL"
        price="49.99"
      />
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
      <Product
        imageCover="/hoodie.webp"
        title="Hoodie Yellow XL"
        price="49.99"
      />
    </Section>
  );
};

export default ProductSection;
