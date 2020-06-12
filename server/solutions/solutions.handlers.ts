import { Solution } from 'lib/models/solution/Solution';

import db from '../services/db';
import { ObjectId, InsertOneWriteOpResult, WithId } from 'mongodb';
import { CreateSolutionRequest } from '../../lib/models/solution/CreateSolution';

export function getSolutions(): Promise<Solution[]> {
  return db.getDb().db().collection<Solution>('solutions').find().toArray();
}

export function getSolutionById(solutionId: string): Promise<null | Solution> {
  return db
    .getDb()
    .db()
    .collection<Solution>('solutions')
    .findOne({ _id: (new ObjectId(solutionId) as unknown) as string })
    .then((data) => {
      console.log('x', data);
      return data;
    });
}

export async function createSolution(
  repo: string,
  demo: string,
  comment: string,
  taskId: string,
  phase: string,
  authorId: string | undefined,
): Promise<InsertOneWriteOpResult<WithId<CreateSolutionRequest>>> {
  const date = new Date();
  return await db.getDb().db().collection<CreateSolutionRequest>('solutions').insertOne({
    repo,
    demo,
    comment,
    phase,
    _task: taskId,
    _user: authorId,
    createdAt: date,
  });
}
