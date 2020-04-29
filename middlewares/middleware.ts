import nextConnect, { Middleware } from 'next-connect';
import database from './database';

const middleware = nextConnect();

// type Middleware = NextConnect | RequestHandler;
middleware.use((database as unknown) as Middleware);

export default middleware;
