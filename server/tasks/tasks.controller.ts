import { Request, Response } from 'express';
const Router = require('express').Router;
import { Task } from '../../lib/models/task/Task';
import { createTask, getAllTasks, getTaskById } from './tasks.handlers';
import { CreateTaskModel } from '../../lib/models/task/CreateTask';
import { EnhancedRequest } from '../../lib/models/request/Request';

const router = Router();

// export default function tasksController(server: Express): void {
router.get(
  '',
  (_req: Request, res: Response): Promise<Task[] | void> => {
    return getAllTasks()
      .then((tasks) => {
        res.send(tasks);
      })
      .catch((e) => console.warn(e));
  },
);

router.get(
  '/:id',
  (req: Request, res: Response): Promise<Task | void> => {
    const taskId = req?.params?.id;

    return getTaskById(taskId)
      .then((task) => {
        res.send(task);
      })
      .catch((e) => console.warn(e));
  },
);

router.post('', (req: EnhancedRequest, res: Response): Promise<void> | undefined => {
  const authorId = req.user?._id;

  if (!authorId) {
    res.status(403).send('No authorized');
    return;
  }

  const CreateTask = new CreateTaskModel(req.body, authorId);
  const createdTask = CreateTask.get();

  return createTask(createdTask).then((value) => console.log(value));
});
// }

export default router;
