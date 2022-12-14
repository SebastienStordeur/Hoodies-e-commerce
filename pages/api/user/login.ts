import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";

export default async function httpLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
  const { email, password } = req.body;
  const client = await MongoClient.connect(url);
  const db = client.db("hoodies");
  const collection = db.collection("users");
  const user = await collection.findOne({ email });

  if (user) {
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "Wrong email/password combination",
      });
    } else {
      const payload = {
        id: user._id,
        fullName: user.firstName + " " + user.lastName,
      };
      const token = jwt.sign(payload, "fdsfdsf", { expiresIn: "90d" });
      return res.status(200).json({ status: 200, success: true, token });
    }
  } else {
    return res.status(500).json({ status: 400, success: false });
  }
}
