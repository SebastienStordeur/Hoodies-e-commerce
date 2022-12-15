import Image from "next/image";
import React from "react";
import Section from "../layout/Section";
import ProductInfos from "./product-infos/ProductInfos";

interface SingleProductSection {
  hoodie: any;
}

const SingleProductSection: React.FC<SingleProductSection> = ({ hoodie }) => {
  const { id, title, brand, colors, size, images, price } = hoodie;
  return (
    <Section id={`${title} section`} className="flex">
      <div className="flex">
        <div className="grid gap-1  mr-4">
          {images.map((image: string, index: number) => {
            return (
              <Image
                key={index}
                src={image}
                alt={title}
                width={80}
                height={80}
                priority
              />
            );
          })}
        </div>
        <Image src={images[0]} alt="" width={300} height={400} priority />
      </div>
      <ProductInfos
        title={title}
        brand={brand}
        colors={colors}
        size={size}
        price={price}
        id={id}
      ></ProductInfos>
    </Section>
  );
};

export default SingleProductSection;
