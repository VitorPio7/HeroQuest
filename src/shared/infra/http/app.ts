import express, { NextFunction, Request, Response } from "express";

import "express-async-error";

import cors from "cors";

import timeout from "connect-timeout";

import morgan from "morgan";

import helmet from "helmet";

import dotenv from "dotenv";

import { rateLimiter } from "@config/rateLimit";

dotenv.config({ path: "./.config.env" });

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());

app.use(express.json());
