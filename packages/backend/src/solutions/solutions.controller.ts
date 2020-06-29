import { Request, Response } from 'express';
import { Solution } from '@kodifaj/common';
const Router = require('express').Router;

import {
  getSolutions,
  getSolutionById,
  createSolution,
  updateSolution,
} from './solutions.handlers';

const router = Router();

router.get(
  '',
  (_req: Request, res: Response): Promise<void | Solution[]> => {
    return getSolutions()
      .then((solutions) => {
        res.send(solutions);
      })
      .catch((e) => console.warn(e));
  },
);

router.get(
  '/:id',
  (req: Request, res: Response): Promise<void | Solution> => {
    const solutionId = req?.params?.id;

    return getSolutionById(solutionId)
      .then((solution) => {
        res.send(solution);
      })
      .catch((e) => console.warn(e));
  },
);

router.post(
  '',
  (req: Request, res: Response): Promise<void | Solution> => {
    const { repo, demo, comment, taskId, phase, technologies, authorId } = req.body;
    return createSolution(repo, demo, comment, taskId, phase, technologies, authorId)
      .then((data) => {
        res.send(data);
      })
      .catch((e) => console.warn(e));
  },
);

router.put(
  '/:id',
  (req: Request, res: Response): Promise<void | Solution> => {
    const solutionId = req?.params?.id;
    const { repo, demo, comment, phase, technologies } = req.body;
    return updateSolution(solutionId, repo, demo, comment, phase, technologies)
      .then((data) => {
        res.send(data);
      })
      .catch((e) => console.warn(e));
  },
);

export default router;
