import { NextFunction, Request, Response } from "express";

const headerValidator = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("middleware");

  next();
};

export default headerValidator;
