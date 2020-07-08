import { Solution } from '../solution/Solution';
import { Task } from '../task/Task';

export interface User {
  _id?: string;
  githubId: string;
  login: string;
  photo: string;
  _solutions?: string[];
  solutions?: Solution[];
  _tasks?: string[];
  tasks?: Task[];
}
