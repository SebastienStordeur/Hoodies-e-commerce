import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function httpSignup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  try {
    const url =
      "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
    const client = await MongoClient.connect(url);
    const db = client.db("hoodies");
    const collection = db.collection("users");

    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    await collection.insertOne({
      name: firstName + " " + lastName,
      email: email,
      password: hashedPassword,
    });

    client.close();
    return res.status(200).json({ success: true, status: 200 });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, err });
  }
}
