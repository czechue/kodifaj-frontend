export interface User {
  _id?: string;
  githubId: string;
  login: string;
  photo?: string;
  _solutions: string[];
  _tasks: string[];
}
