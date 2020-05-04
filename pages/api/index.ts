import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../middlewares/middleware';
import { Document } from 'mongoose';

const handler = nextConnect();
handler.use(middleware);

handler.get(
  async (req: NextApiRequest, res: NextApiResponse<Document[]>): Promise<void> => {
    res.status(204);
  },
);

export default handler;
