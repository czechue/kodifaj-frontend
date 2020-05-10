// todo: fix declaration
declare module 'next-session';
declare module 'mongojs' {}
import { NextApiRequest } from 'next';
import { Db } from 'mongodb';

declare module 'next' {
  interface NextApiRequest extends NextApiRequest {
    db: Db;
  }
}
