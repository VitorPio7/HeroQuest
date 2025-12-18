import { rateLimit, RateLimitRequestHandler } from "express-rate-limit";


const rateLimiter: RateLimitRequestHandler = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 110,
  message: "Too many requests from this IP, please, try another time!!!",
});

export default rateLimiter;
