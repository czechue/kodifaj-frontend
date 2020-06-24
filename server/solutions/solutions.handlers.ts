import { Solution } from 'lib/models/solution/Solution';

import db from '../services/db';
import { ObjectId, UpdateWriteOpResult } from 'mongodb';

export function getSolutions(): Promise<Solution[]> {
  return db.getDb().db().collection<Solution>('solutions').find().toArray();
}

export function getSolutionById(solutionId: string): Promise<null | Solution> {
  return db
    .getDb()
    .db()
    .collection<Solution>('solutions')
    .aggregate([
      { $match: { _id: new ObjectId(solutionId) } },
      {
        $lookup: {
          from: 'tasks',
          localField: '_task',
          foreignField: '_id',
          as: '_task',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: '_user',
          foreignField: '_id',
          as: '_user',
        },
      },
    ])
    .next();
}

export async function createSolution(
  repo: string,
  demo: string,
  comment: string,
  taskId: string,
  phase: 'review' | 'done',
  technologies: string[],
  authorId: string | undefined,
): Promise<void> {
  const date = new Date();
  const taskIdObject = new ObjectId(taskId);
  const userIdObject = new ObjectId(authorId);
  return await db
    .getDb()
    .db()
    .collection('solutions')
    .insertOne({
      repo,
      demo,
      comment,
      phase,
      technologies,
      _task: taskIdObject,
      _user: userIdObject,
      createdAt: date,
    })
    .then(async (result) => {
      await db
        .getDb()
        .db()
        .collection('tasks')
        .findOneAndUpdate({ _id: taskIdObject }, { $push: { _solutions: result.insertedId } });
      await db
        .getDb()
        .db()
        .collection('users')
        .findOneAndUpdate({ _id: userIdObject }, { $push: { _solutions: result.insertedId } });
    });
}

export async function updateSolution(
  solutionId: string,
  repo: string,
  demo: string,
  comment: string,
  phase: 'review' | 'done',
  technologies: string[],
): Promise<UpdateWriteOpResult> {
  const date = new Date();
  const solutionObjectId = new ObjectId(solutionId);
  return await db
    .getDb()
    .db()
    .collection('solutions')
    .updateOne(
      { _id: solutionObjectId },
      {
        $set: {
          repo,
          demo,
          comment,
          phase,
          technologies,
          createdAt: date,
        },
      },
    );
}
