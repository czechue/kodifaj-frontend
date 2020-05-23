// import nextConnect from 'next-connect';
// import { NextApiRequest, NextApiResponse } from 'next';
// import middleware from '../../../middlewares/middleware';
// import { Document } from 'mongoose';
// import User from '../../../models/user/user.schema';
//
// const handler = nextConnect();
// handler.use(middleware);
//
// handler.get(
//   async (req: NextApiRequest, res: NextApiResponse<Document[]>): Promise<void> => {
//     try {
//       const user = await User.findById(req.query.userId);
//       res.status(200).json(user);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   },
// );
//
export default handler;
