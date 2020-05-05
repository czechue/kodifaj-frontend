import nextConnect, { Middleware } from 'next-connect';
import database from './database';
// import session from './session';

const middleware = nextConnect();

middleware.use((database as unknown) as Middleware)
// .use((session as unknown) as Middleware);

export default middleware;
