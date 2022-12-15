import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function httpGetUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
  const client = await MongoClient.connect(url);
  const db = client.db("hoodies");
  const collection = db.collection("users");

  const user = await collection.findOne({});

  client.close();
  return res.status(200).json({
    status: 200,
    success: true,
    user: {
      id: user!._id,
      fullName: user!.fullName,
    },
  });
}
