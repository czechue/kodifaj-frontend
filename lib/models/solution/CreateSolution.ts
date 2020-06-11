export interface CreateSolution {
  repo: string;
  demo: string;
  comment: string;
  phase: string;
  createdAt: Date;
}

// export class CreateSolutionModel {
//   readonly taskId: string;
//   readonly authorId: string;

//   get(): CreateSolution {
//     return {
//       repo,
//       demo,
//       comment,
//       phase,
//       _task: this.taskId,
//       _user: this.authorId,
//       createdAt,
//     };
//   }
// }
