import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const User = require("../models/users/users.mongo");

async function httpSignup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user
      .save()
      .then(() => {
        return res.status(200).json({ status: 200, success: true });
      })
      .catch((err: any) => {
        return res.status(400).json({ status: 400, success: false, err });
      });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, err });
  }
}

async function httpLogin(req: NextApiRequest, res: NextApiResponse) {}

export { httpSignup, httpLogin };
