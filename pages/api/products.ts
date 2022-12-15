import { NextApiRequest, NextApiResponse } from "next";
import httpGetProduct from "./products/[product]";
import httpGetProducts from "./products/getProducts";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (req.url === "/api/products/getProducts") {
      httpGetProducts(req, res);
    } else if (req.url === '"/api/products/getProduct"') {
      httpGetProduct(req, res);
    } else {
    }
  } else {
    return res.status(405).end();
  }
}
