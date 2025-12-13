import { rateLimit } from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 110,
  'message': 'Too many requests from this IP, please, try another time!!!'
});
