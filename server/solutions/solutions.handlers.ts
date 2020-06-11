import { Solution } from 'lib/models/solution/Solution';

import db from '../services/db';
import { ObjectId } from 'mongodb';

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
