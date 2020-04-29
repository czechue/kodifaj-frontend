import mongoose from 'mongoose';
import { NextHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

import '../models/user/user.schema';
import '../models/task/task.schema';

export default async function database(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler,
): Promise<void> {
  if (mongoose.connections[0].readyState) {
    return next();
  }

  await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  return next();
}
