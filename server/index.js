import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import { connect } from "mongoose";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config({ path: "ENV_FILENAME" });

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json({ limit: "50mb" }));

app.use("/item-routes", itemRoutes);

app.get("/", async (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server has started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
