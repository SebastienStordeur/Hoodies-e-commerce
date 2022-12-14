import Link from "next/link";
import React from "react";
import { Section } from "../";
import Product from "./Product";

interface ProductSectionProps {
  hoodies: any;
}

const ProductSection: React.FC<ProductSectionProps> = ({ hoodies }) => {
  console.log(hoodies);
  return (
    <Section
      id="product-section"
      className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {hoodies.map((hoodie: any) => {
        const { id, images, title, price, brand } = hoodie;
        return (
          <Link href={`/product/${id}`}>
            <Product
              key={id}
              imageCover={images[0]}
              title={title}
              price={price}
            />
          </Link>
        );
      })}
    </Section>
  );
};

export default ProductSection;
