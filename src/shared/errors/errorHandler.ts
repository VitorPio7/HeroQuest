import { Request, Response, NextFunction } from "express";

import { QueryFailedError } from "typeorm";

import AppError from "@shared/errors/AppError";

const handlePostgresError = (err: QueryFailedError): AppError => {
  const driverError: any = err.driverError;
  if (driverError.code === "23505") {
    return new AppError("Duplicate fild value. Please use another value.", 400);
  }
  if (driverError.code === "23503") {
    return new AppError("foreign key violation.", 400);
  }
  if (driverError.code === "42601") {
    return new AppError(
      "Missing keywords, incorrect spelling, or improper punctuation in SQL statements.",
      400
    );
  }
  if (driverError.code === "42P01") {
    return new AppError(
      "The referenced table does not exist or is misspelled.",
      400
    );
  }
  if (driverError.code === "42703") {
    return new AppError(
      "The referenced column does not exist or is misspelled.",
      400
    );
  }
  if (driverError.code === "42703") {
    return new AppError(
      "The referenced column does not exist or is misspelled.",
      400
    );
  }
  if (driverError.code === "23502") {
    return new AppError(
      "TAttempting to insert a NULL value into a column defined as NOT NULL.",
      400
    );
  }
  if (driverError.code === "23505") {
    return new AppError(
      "	An INSERT or UPDATE action would create a foreign key violation (e.g., referencing a non-existent primary key.",
      400
    );
  }
   if (driverError.code === "08006") {
     return new AppError(
       "General connection issues, often due to the server not running, firewall restrictions, or incorrect host/port details.",
       400
     );
   }
   if (driverError.code === "53300") {
     return new AppError(
       "The maximum number of simultaneous connections allowed by the server has been reached.",
       400
     );
   }
   if (driverError.code === "40P01") {
     return new AppError(
       "Two or more transactions are waiting for locks held by the other, resulting in a transaction rollback.",
       400
     );
   }
  return new AppError("Database error", 500);
};



const sendErrorDev = (err:AppError, res: Response) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: err
    })
  
}

const sendErrorProd = (err:AppError, res: Response) => {
  if(err.isOperational){
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
  }
  console.log('Error', err)

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  if(err instanceof QueryFailedError) {
    error = handlePostgresError(err)
  }
  if(error instanceof AppError){
    if(process.env.NODE_ENV === 'development'){
      return sendErrorDev(error, res)
    }
    return sendErrorProd(error, res);
  }
  console.log('ERROR ', error)

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}