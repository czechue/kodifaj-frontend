import { NextApiRequest, NextApiResponse } from 'next';

const githubCallback = (req: NextApiRequest, res: NextApiResponse): void => {
  const query = req.query;

  res.writeHead(302, {
    Location: process.env.apiUrl + '/auth/github/callback?code=' + query.code,
    cookie: req.headers.cookie,
  });
};

export default githubCallback;
