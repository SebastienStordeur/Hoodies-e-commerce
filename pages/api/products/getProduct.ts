import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function httpGetProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const url =
    "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";
  const client = await MongoClient.connect(url);
  const db = client.db("hoodies");
  const collection = db.collection("products");

  const hoodies = await collection.findOne(/*  */);
  client.close();
  return res.status(200).json(hoodies);
}
