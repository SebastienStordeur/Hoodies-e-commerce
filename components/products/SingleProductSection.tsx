import Image from "next/image";
import React, { useState } from "react";
import { Hoodie } from "../../pages/product/[product]";
import Section from "../layout/Section";
import ProductInfos from "./product-infos/ProductInfos";

interface SingleProductSection {
  hoodie: any;
}

const SingleProductSection: React.FC<SingleProductSection> = ({ hoodie }) => {
  const { id, title, brand, colors, size, images, price } = hoodie;
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <Section
      id={`${title} section`}
      className="flex flex-col-reverse sm:flex-row md:justify-evenly"
    >
      <div className="flex flex-col-reverse w-full">
        <div className="flex flex-wrap">
          {images.map((image: string, index: number) => {
            return (
              <div
                className="cursor-pointer w-24 sm:w-28 mr-2 mt-1"
                onClick={() => setActiveImage(index)}
                key={index}
              >
                <Image
                  src={image}
                  alt={title}
                  width={80}
                  height={40}
                  priority
                  className="object-cover w-auto h-auto"
                />
              </div>
            );
          })}
        </div>
        <div className="w-full sm:w-10/12">
          <Image
            src={images[activeImage]}
            alt=""
            width={500}
            height={400}
            priority
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>
      <ProductInfos
        title={title}
        brand={brand}
        colors={colors}
        size={size}
        price={price}
        id={id}
      ></ProductInfos>
      <div className="w-80">Checkout</div>
    </Section>
  );
};

export default SingleProductSection;
