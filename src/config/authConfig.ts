import jwt, { SignOptions } from "jsonwebtoken";


interface IAuthConfig {
  jwt: {
    secret: string | jwt.Secret,
    expiresIn: string
  }
}
const authConfig:IAuthConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || ("dev-secret" as jwt.Secret),
    expiresIn: process.env.JWT_EXPIRES_IN || ("1d" as string),
  },
};

export default authConfig;