import { Request, Response } from "express";

// ----------------------------------------------------------------------

export default async function _defaultController(
  request: Request,
  response: Response
) {
  try {
    console.log("route main");
  } catch (e) {
    response.status(502).end(JSON.stringify({ message: (e as Error).message }));
  }
}
