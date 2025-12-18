import dotenv from "dotenv";

import { dataSource } from "../typeorm/data-source";

import process from "process";

import { app } from "./app";

dotenv.config({ path: "./.env" });

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});
const server = app.listen(process.env.PORT || 3333, () => {
  console.log(`Server started on port ${process.env.PORT || 3333}`);
});
dataSource.initialize().then(() => {
  server;
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
