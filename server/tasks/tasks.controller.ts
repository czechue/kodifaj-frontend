import { Express, Request, Response } from 'express';

import { Task } from '../../lib/models/task/Task';
import { createTask, getAllTasks, getTaskById } from './tasks.handlers';
import { CreateTaskModel } from '../../lib/models/task/CreateTask';
import { EnhancedRequest } from '../../lib/models/request/Request';

export default function tasksController(server: Express): void {
  server.get(
    '/api/tasks',
    (_req: Request, res: Response): Promise<void | Task[]> => {
      return getAllTasks()
        .then((tasks) => {
          res.send(tasks);
        })
        .catch((e) => console.warn(e));
    },
  );

  server.get(
    '/api/tasks/:id',
    async (req: Request, res: Response): Promise<void | null | Task> => {
      const taskId = req?.params?.id;

      return getTaskById(taskId)
        .then((task) => {
          res.send(task);
        })
        .catch((e) => console.warn(e));
    },
  );

  server.post(
    '/api/tasks',
    async (req: EnhancedRequest, res: Response): Promise<void> => {
      const authorId = req.user?._id;

      if (!authorId) {
        res.status(403).send('No authorized');
        return;
      }

      const CreateTask = new CreateTaskModel(req.body, authorId);
      const createdTask = CreateTask.get();

      return createTask(createdTask).then((value) => console.log(value));
    },
  );
}
