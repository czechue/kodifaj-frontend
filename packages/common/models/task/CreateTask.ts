export interface CreateTask extends CreateTaskRequest {
  _user: string;
  _solutions: string[];
  title: string;
  repo: string;
  createdAt?: string;
  rating: number;
  difficulty: number;
  reviewCount: number;
}

export interface CreateTaskRequest {
  content: string;
  images?: string[];
  tips?: string[];
  title: string;
  tags?: string[];
}

export class CreateTaskModel {
  readonly createTaskRequest: CreateTaskRequest;
  readonly authorId: string;

  constructor(createTaskRequest: CreateTaskRequest, authorId: string) {
    this.createTaskRequest = createTaskRequest;
    this.authorId = authorId;
  }

  public get(): CreateTask {
    const { content, images, tips, title, tags } = this.createTaskRequest;
    return {
      content,
      title,
      images: images ? images : [],
      tips: tips ? tips : [],
      tags: tags ? tags : [],
      _user: this.authorId,
      _solutions: [],
      repo: '',
      rating: 0,
      difficulty: 0,
      reviewCount: 0,
    };
  }
}
