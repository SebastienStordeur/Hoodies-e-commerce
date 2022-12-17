import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function httpUpdateCart(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { cart, id } = req.body;
    const url =
      "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
    const client = await MongoClient.connect(url);
    const db = client.db("hoodies");
    const collection = db.collection("users");

    const user = await collection.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
}
