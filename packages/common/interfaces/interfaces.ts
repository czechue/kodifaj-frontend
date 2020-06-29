import { Request } from 'express';

export interface EnhancedRequest extends Request {
  user?: {
    _id?: string;
  };
}

export interface User {
  _id?: string;
  githubId: string;
  login: string;
  photo?: string;
  _solutions?: string[];
  _tasks?: string[];
}

export interface CreateUser {
  githubId: string;
  login: string;
  photo?: string;
}

export interface Solution {
  comment: string;
  createdAt: string;
  demo: string;
  phase: 'review' | 'done';
  technologies?: string[];
  repo: string;
  _id: string;
  _task: {
    images: string[];
    title: string;
    _id: string;
  };
  _user: User;
}

export interface Task {
  _id: string;
  _user: string;
  user: User;
  _solutions: string[];
  solutions?: Solution[];
  title: string;
  repo: string;
  images: string[];
  createdAt: string;
  tags: string[];
  content: string;
  tips: string[];
  rating: number;
  difficulty: number;
  reviewCount: number;
}

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
