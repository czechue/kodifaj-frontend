import { Request } from 'express';

export interface EnhancedRequest extends Request {
  user?: {
    _id?: string;
  };
}
