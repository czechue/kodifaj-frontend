import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../middlewares/middleware';
import { Task } from '../../models/task/task.types';

const tasks = ([
  {
    images: ['https://source.unsplash.com/user/erondu/400x300'],
    tips: ['Feature/LFE-664 onboarding on user listing bundles'],
    tags: ['html', 'css', 'js'],
    _id: '5e0d17b8b7c9ff45b34035ce',
    _solutions: [
      '5e388fb47bdfbd063031d438',
      '5e388fc07bdfbd063031d439',
      '5e3b1c90ddc1b015f831bfdc',
      '5e3b202b903dcc257c3f2941',
      '5e3b2130bb693a1790311c0e',
      '5e3b2138bb693a1790311c0f',
      '5e3b2887b938742758df40c1',
      '5e3b28ddc3fe79284cbf69eb',
      '5e3b295c3558241f8034cabb',
      '5e3b2a0b02c82c2384431cc1',
      '5e3b2a6387b95927d8116fd3',
      '5e3b2cbe99cffc2c109082a9',
    ],
    title: 'Feature/LFE-664 onboarding on user listing bundles',
    content: 'tresc',
    _user: { _id: '5e0000d91e648e12754824ab', login: 'czechue' },
    createdAt: '2020-01-01T22:05:44.858Z',
    __v: 0,
  },
  {
    images: [
      'https://source.unsplash.com/user/erondu/400x300',
      'https://source.unsplash.com/user/erondu/400x300',
      'https://source.unsplash.com/user/erondu/400x300',
    ],
    tips: ['c'],
    tags: ['html', 'css'],
    _id: '5e11157520d8d1d0f047ba40',
    _solutions: ['5e111e9e20d8d1d0f047ba41', '5e111eb820d8d1d0f047ba42'],
    title: 'IM-28459 | fix | dodamy 99 99999',
    content:
      '# h1\n## h2\n### h3\n\n**element b**\n\n```javascript\nfunction name (x) {\n  return elo;\n}\n```',
    _user: { _id: '5e0000d91e648e12754824ab', login: 'czechue' },
    createdAt: '2020-01-04T22:45:09.351Z',
    __v: 0,
  },
  {
    images: [
      'https://images.unsplash.com/photo-1571647343744-60924c32aefb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1577914262482-f604ae3f3e15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400',
      'https://images.unsplash.com/photo-1574283940248-dae5ed912186?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400',
    ],
    tips: ['Wymyśleć formę wskazówek.'],
    tags: ['html', 'css', 'js', 'xss'],
    _id: '5e134fe9cbcd2822bb7f8ee7',
    _solutions: [],
    title: 'Treść nowego zadania 66',
    content:
      'Zadanie _poleca_ na **rozwiazaniu** go\n\n# To jest h1\n## a to h2\n### h3\n#### h4 i h5\n##### h5\n###### h6\n\n```javascript\nfunction (poi) {\n  return poi\n}\n```\n* lista li\n* lista li\n* lista li\n\n1. lista ol\n1. ol\n1. lista ol\n1. ol',
    _user: { _id: '5e0000d91e648e12754824ab', login: 'czechue' },
    createdAt: '2020-01-06T15:19:05.020Z',
    __v: 0,
  },
  {
    images: [],
    tips: [],
    tags: [],
    _id: '5e1505670383785591b56109',
    _solutions: [],
    title: 'tytul',
    repo: 'http://aaaaa',
    content: 'test',
    _user: { _id: '5e0000d91e648e12754824ab', login: 'czechue' },
    createdAt: '2020-01-07T22:25:43.273Z',
  },
] as unknown) as Task[];

const handler = nextConnect();
handler.use(middleware);

handler.get(
  async (req: any, res: NextApiResponse<Task[]>): Promise<void> => {
    // const tasks = await Task.find().populate('_user', 'login');
    const tasksRes: Task[] = [];
    await req.db
      .collection('tasks')
      .aggregate([
        { $lookup: { from: 'users', localField: '_user', foreignField: '_id', as: 'user' } },
      ])
      .forEach((taskDoc: any) => {
        console.log('taskDoc', taskDoc);
        tasksRes.push(taskDoc);
      })
      .then((tasks: any) => res.status(200).json(tasksRes))
      .catch((err: any) => console.log('get task error', err));
  },
);

export default handler;
