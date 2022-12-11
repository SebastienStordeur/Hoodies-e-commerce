import { NextApiRequest, NextApiResponse } from "next";
import { httpSignup } from "./routes/users.controller";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST" && req.url === "/api/user/signup") {
    httpSignup(req, res);
  } else {
    res.status(405).end();
  }
}
