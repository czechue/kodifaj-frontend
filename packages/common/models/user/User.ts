import { Solution } from '../solution/Solution';
import { Task } from '../../interfaces/interfaces';

export interface User {
  _id?: string;
  githubId: string;
  login: string;
  photo: string;
  _solutions?: Solution[];
  _tasks?: Task[];
}
