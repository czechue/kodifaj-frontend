import nextConnect, { Middleware } from 'next-connect';
import database from './database';

const middleware = nextConnect();

middleware.use((database as unknown) as Middleware);

export default middleware;
