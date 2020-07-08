import { ObjectId, UpdateWriteOpResult, MongoClient } from 'mongodb';
import { Solution } from '@kodifaj/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getDb = require('../services/db').getDb as () => MongoClient;

export function getSolutions(): Promise<Solution[]> {
  return getDb().db().collection<Solution>('solutions').find().toArray();
}

export function getSolutionById(solutionId: string): Promise<null | Solution> {
  return getDb()
    .db()
    .collection<Solution>('solutions')
    .aggregate([
      { $match: { _id: new ObjectId(solutionId) } },
      {
        $lookup: {
          from: 'tasks',
          localField: '_task',
          foreignField: '_id',
          as: 'task',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: '_user',
          foreignField: '_id',
          as: 'user',
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

  return await getDb()
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
      await getDb()
        .db()
        .collection('tasks')
        .findOneAndUpdate(
          {
            _id: taskIdObject,
          },
          { $push: { _solutions: result.insertedId } },
        );
      await getDb()
        .db()
        .collection('users')
        .findOneAndUpdate(
          {
            _id: userIdObject,
          },
          { $push: { _solutions: result.insertedId } },
        );
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

  return await getDb()
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
