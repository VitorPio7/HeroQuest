import jwt, { SignOptions } from "jsonwebtoken";

export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || ("dev-secret" as jwt.Secret),
    expiresIn: process.env.JWT_EXPIRES_IN || ("1d" as string),
  },
};
