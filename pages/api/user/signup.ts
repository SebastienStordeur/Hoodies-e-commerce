import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function httpSignup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const url =
      "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
    const client = await MongoClient.connect(url);
    const db = client.db("hoodies");
    const collection = db.collection("users");

    const user = await collection.findOne({ email });

    if (user) {
      return res
        .status(500)
        .json({ status: 500, success: false, duplicate: true });
    }

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
