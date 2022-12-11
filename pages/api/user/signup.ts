import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  try {
    const url =
      "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
    const dbName = "hoodies";

    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    const collection = db.collection("users");
    await collection.insertOne({
      name: req.body.newUser.name,
      email: req.body.newUser.email,
    });

    client.close();

    return res.status(200).json({ success: true, status: 200 });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, status: 500, err });
  }
}
