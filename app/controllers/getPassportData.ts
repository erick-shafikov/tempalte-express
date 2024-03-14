import { Request, Response } from "express";

export default async function defaultController(
  request: Request,
  response: Response
) {
  try {
    console.log();
  } catch (e) {
    response.status(502).end(JSON.stringify({ message: (e as Error).message }));
  }
}
