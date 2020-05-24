import { Express, Request, Response } from "express";
import Server from "next/dist/next-server/server/next-server";

export default function routes(app: Server, server: Express) {
  server.get("/users/:[id]", (req: Request, res: Response) => {
    return app.render(req, res, "/users", {
      id: req.params.id
    });
  });
}
