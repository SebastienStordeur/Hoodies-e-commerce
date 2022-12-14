import { NextApiRequest, NextApiResponse } from "next";
import httpGetProducts from "./products/getProducts";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (req.url === "/api/products/getProducts") {
      httpGetProducts(req, res);
    }
  } else {
    return res.status(405).end();
  }
}
