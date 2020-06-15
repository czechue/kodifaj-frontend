import { Express, Request, Response } from 'express';

import { Solution } from '../../lib/models/solution/Solution';
import { getSolutions, getSolutionById, createSolution } from './solutions.handlers';

export default function solutionsController(server: Express): void {
  server.get(
    '/api/solutions',
    (_req: Request, res: Response): Promise<void | Solution[]> => {
      return getSolutions()
        .then((solutions) => {
          res.send(solutions);
        })
        .catch((e) => console.warn(e));
    },
  );
  server.get(
    '/api/solutions/:id',
    (req: Request, res: Response): Promise<void | Solution> => {
      const solutionId = req?.params?.id;

      return getSolutionById(solutionId)
        .then((solution) => {
          res.send(solution);
        })
        .catch((e) => console.warn(e));
    },
  );
  server.post(
    '/api/solutions',
    (req: Request, res: Response): Promise<void | Solution> => {
      const { repo, demo, comment, taskId, phase, technologies, authorId } = req.body;
      return createSolution(repo, demo, comment, taskId, phase, technologies, authorId)
        .then((data) => {
          res.send(data);
        })
        .catch((e) => console.warn(e));
    },
  );
}
