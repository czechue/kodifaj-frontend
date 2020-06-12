export interface CreateSolutionRequest {
  repo: string;
  demo: string;
  comment: string;
  phase: string;
  _task: string;
  _user?: string;
  createdAt: Date;
}
