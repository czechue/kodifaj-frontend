import { Solution } from '../solution/solution';

export interface User {
  _id?: string;
  githubId: string;
  login: string;
  photo: string;
  _solutions?: Solution[];
  _tasks?: string[];
}
