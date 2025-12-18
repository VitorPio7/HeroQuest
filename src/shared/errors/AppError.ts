export default class AppError extends Error {
  public statusCode: number;
  public status: string;

  constructor(message: string, statusCode: any) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}
