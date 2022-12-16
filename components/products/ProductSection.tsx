import Link from "next/link";
import React from "react";
import { Section } from "../";
import { Hoodie } from "../../pages/product/[product]";
import Product from "./Product";

interface ProductSectionProps {
  hoodies: Hoodie[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ hoodies }) => {
  return (
    <Section
      id="product-section"
      className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {hoodies.map((hoodie: any) => {
        const { id, images, title, price } = hoodie;
        return (
          <Link href={`/product/${id}`} key={id}>
            <Product imageCover={images[0]} title={title} price={price} />
          </Link>
        );
      })}
    </Section>
  );
};

export default ProductSection;
