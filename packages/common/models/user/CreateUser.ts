import { User } from './User';
import { Profile } from 'passport-github2';

export interface CreateUser {
  githubId: string;
  login: string;
  photo?: string;
}

export class CreateUserModel {
  readonly userProfile: Profile;

  constructor(userProfile: Profile) {
    this.userProfile = userProfile;
  }

  get(): User {
    return {
      githubId: this.userProfile.id,
      login: this.userProfile.displayName,
      photo: this.userProfile.photos ? this.userProfile.photos[0].value : '',
      _solutions: [],
      _tasks: [],
    };
  }
}
