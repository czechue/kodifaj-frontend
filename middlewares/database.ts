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

  await mongoose.connect(
    'mongodb://mo1272_kodifaj_p:Cymbalki15!@195.167.159.159:27017/mo1272_kodifaj_p',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  );

  return next();
}
