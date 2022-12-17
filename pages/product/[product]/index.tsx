import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Main } from "../../../components";
import SingleProductSection from "../../../components/products/SingleProductSection";
import { authActions } from "../../../redux/auth/auth";

interface ProductPageProps {
  hoodie: Hoodie;
}

export interface Hoodie {
  title(title: any): unknown;
  hoodie: {
    id: string;
    title: string;
    brand: string;
    colors: string[];
    images: string[];
    size: string[];
    price: number;
  };
}

const ProductPage: NextPage<ProductPageProps> = ({ hoodie }) => {
  const dispatch = useDispatch();
  let token: string | null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    if (!token) return;
    dispatch(authActions.retrieveStoredToken());
    axios.get("/api/users").then((res) => {
      const { id, fullName } = res.data.user;
      dispatch(authActions.getProfile({ id, fullName }));
    });
  }, []);

  console.log(hoodie.title);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Hoodies - ${hoodie.title}`}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content={`Buy ${hoodie.title} and start or complete your hoodies collection`}
          data-react-helmet="true"
        />
      </Head>
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
