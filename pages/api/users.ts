import { NextApiRequest, NextApiResponse } from "next";
import httpGetUser from "./user/getUser";
import httpLogin from "./user/login";
import httpSignup from "./user/signup";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST" && req.url === "/api/user/signup") {
    return httpSignup(req, res);
  } else if (req.method === "POST" && req.url === "/api/user/login") {
    return httpLogin(req, res);
  } else if (req.method === "GET" && req.url === "/api/users") {
    return httpGetUser(req, res);
  } else {
    return res.status(405).end();
  }
}
