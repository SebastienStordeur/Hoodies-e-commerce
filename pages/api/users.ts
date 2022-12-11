import { NextApiRequest, NextApiResponse } from "next";
import signup from "./user/signup";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST" && req.url === "/api/user/signup") {
    signup(req, res);
  } else {
    res.status(405).end();
  }
}
