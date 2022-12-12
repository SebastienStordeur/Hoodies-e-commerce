import { NextApiRequest, NextApiResponse } from "next";
import { setHttpClientAndAgentOptions } from "next/dist/server/config";
import httpLogin from "./user/login";
import httpSignup from "./user/signup";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (req.url === "/api/user/signup") {
      httpSignup(req, res);
    } else if (req.url === "/api/user/login") {
      httpLogin(req, res);
    }
  } else {
    return res.status(405).end();
  }
}
