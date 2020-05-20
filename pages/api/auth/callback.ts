import auth0 from '../../../lib/auth/auth0';
import nextConnect from 'next-connect';
import middleware from '../../../lib/middlewares/middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { ISession } from '@auth0/nextjs-auth0/dist/session/session';
import { RawUserAuth0, rawUserAuth0Schema, User } from '../../../lib/models/user/user';

const handler = nextConnect();
handler.use(middleware);

async function callback(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const session: ISession | null | undefined = await auth0.getSession(req);

    if (!session) {
      console.error('No session found - Error');
      await auth0.handleCallback(req, res, { redirectTo: '/' });
      return;
    }

    const userAuth0 = session.user as RawUserAuth0;

    if (rawUserAuth0Schema.validate(userAuth0).error) {
      console.error('RawUserAuth0 - validation error ');
    }

    const existingUser: User | null = await req.db.collection('users').findOne({
      githubId: userAuth0.sub,
    });

    if (existingUser) {
      await auth0.handleCallback(req, res, { redirectTo: '/' });
      return;
    }

    try {
      const user: User = {
        githubId: userAuth0.sub,
        login: userAuth0.nickname,
        photo: userAuth0.picture,
      };

      await req.db.collection('users').insertOne(user);
    } catch (e) {
      console.error(e);
    }

    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

handler.use(callback);

export default handler;
