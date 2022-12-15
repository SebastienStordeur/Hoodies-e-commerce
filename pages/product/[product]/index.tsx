import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Header, Main, Section } from "../../../components";
import SingleProductSection from "../../../components/products/SingleProductSection";

interface ProductPageProps {
  hoodie: any;
}

const ProductPage: NextPage<ProductPageProps> = ({ hoodie }) => {
  /* console.log(hoodie); */
  return (
    <React.Fragment>
      <Header />
      <Main>
        <SingleProductSection hoodie={hoodie}></SingleProductSection>
      </Main>
    </React.Fragment>
  );
};

export default ProductPage;

export async function getServerSideProps(context: any) {
  const id = context.query;
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${id.product}`
  );

  return {
    props: {
      hoodie: {
        id: data._id.toString(),
        title: data.title,
        brand: data.brand,
        colors: data.colors,
        size: data.size,
        price: data.price,
        images: data.images,
      },
    },
  };
}
