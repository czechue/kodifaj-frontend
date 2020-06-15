import { User } from '../user/user';
import { TechnologiesSelect } from 'components/task/details/solutions/newSolutionForm/NewSolutionForm';

export interface Solution {
  comment: string;
  createdAt: string;
  demo: string;
  phase: 'review' | 'done';
  technologies: TechnologiesSelect;
  repo: string;
  _id: string;
  _task: {
    images: string[];
    title: string;
  };
  _user: User;
}
