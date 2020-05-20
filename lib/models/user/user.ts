/* eslint-disable @typescript-eslint/camelcase */
import Joi from '@hapi/joi';
import { IClaims } from '@auth0/nextjs-auth0/dist/session/session';

export interface RawUserAuth0 extends IClaims {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
}

export const rawUserAuth0Schema = Joi.object<RawUserAuth0>({
  nickname: Joi.string().required(),
  name: Joi.string().required(),
  picture: Joi.string(),
  updated_at: Joi.date().required(),
  email: Joi.string().required(),
  email_verified: Joi.bool().required(),
  sub: Joi.string().required(),
});

export interface User {
  _id?: string;
  githubId: string;
  login: string;
  photo?: string;
}
