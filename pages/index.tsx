import axios from "axios";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { Header } from "../components";
import { ProductSection } from "../components";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/auth/auth";
import { Hoodie } from "./product/[product]";

interface HomeProps {
  hoodies: Hoodie[];
}

const Home: NextPage<HomeProps> = ({ hoodies }) => {
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

  return (
    <React.Fragment>
      <Header />
      <ProductSection hoodies={hoodies} />
    </React.Fragment>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await axios.get(
    "http://localhost:3000/api/products/getProducts"
  );

  return {
    props: {
      hoodies: data.map((hoodie: any) => ({
        id: hoodie._id.toString(),
        title: hoodie.title,
        brand: hoodie.brand,
        colors: hoodie.colors,
        size: hoodie.size,
        price: hoodie.price,
        images: hoodie.images,
      })),
    },
  };
}
