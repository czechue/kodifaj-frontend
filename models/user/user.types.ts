export interface User {
  _id: string;
  githubId: string;
  _solutions: string[];
  _tasks: string[];
  login: string;
  photo?: string;
}
