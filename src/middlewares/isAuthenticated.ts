import { Request, Response, NextFunction } from "express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = process.env.SECURITY_TOKEN;

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      errorCode: "token.invalid",
    });
  }

  const [, token] = authToken.split(" ");

  if (token === id) {
    return next();
  } else {
    return res.status(401).json({
      errorCode: "token.invalid",
    });
  }
}
