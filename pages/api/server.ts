import http from "http";
import { app } from "./app";
import mongoose from "mongoose";

const PORT = 3000;

const MONGO_URL =
  "mongodb+srv://Sebastien:anrCqJLqSRmtM8Eh@cluster0.kdi6lcg.mongodb.net/hoodies";

const server = http.createServer(app);

mongoose.connection.on("open", () => {
  console.log("Connection to MongoDB successful");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
