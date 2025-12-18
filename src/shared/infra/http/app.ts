import express, { NextFunction, Request, Response } from "express";

import "express-async-error";

import cors from "cors";

import timeout from "connect-timeout";

import morgan from "morgan";

import helmet from "helmet";

import { errors } from "celebrate";

import dotenv from "dotenv";

import rateLimiter from "@config/rateLimit";

import { xss } from "express-xss-sanitizer";

import routes from "./routes/index";

import AppError from "@shared/errors/AppError";

dotenv.config({ path: "./.config.env" });

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(routes);

app.use(errors());

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  return res.status(error.statusCode).json({
    status: 'error',
    message: error.message
  });
});

app.use(helmet());

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use("/api", rateLimiter);

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(xss());

app.use(cors());

app.use(timeout("12s"));

app.use(express.json());

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export { app };
