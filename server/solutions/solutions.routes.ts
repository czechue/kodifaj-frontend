import { Express, Request, Response } from 'express';
import Server from 'next/dist/next-server/server/next-server';

export default function routes(app: Server, server: Express): void {
  server.get('/solutions/:[id]', (req: Request, res: Response) => {
    return app.render(req, res, '/solutions', {
      id: req.params.id,
    });
  });

  server.get('/solutions', (req: Request, res: Response) => {
    return app.render(req, res, '/');
  });

  server.get('/', (req: Request, res: Response) => {
    return app.render(req, res, '/');
  });
}
