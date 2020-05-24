import { Express, Request, Response } from "express";
import Server from "next/dist/next-server/server/next-server";

export default function routes(app: Server, server: Express) {
  server.get("/tasks/:[id]", (req: Request, res: Response) => {
    return app.render(req, res, "/tasks", {
      id: req.params.id
    });
  });

  server.get("/tasks", (req: Request, res: Response) => {
    return app.render(req, res, "/");
  });

  server.get("/", (req: Request, res: Response) => {
    return app.render(req, res, "/");
  });
}
