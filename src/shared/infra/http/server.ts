import dotenv from "dotenv";

import { dataSource } from "../typeorm/data-source";

import { app } from "./app";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);

  process.exit(1);
});

dataSource.initialize().then(() => {
  const server = app.listen(process.env.PORT || 3333, ()=>{
    console.log(`Server started on port ${process.env.PORT || 3333}`)
  });
});

dotenv.config({ path: "./.env" });
