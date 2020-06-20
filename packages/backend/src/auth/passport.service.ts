import passport from 'passport';
import keys from '../config/keys';
import { Profile } from 'passport-github2';
import { VerifyCallback } from 'passport-oauth2';
import { User } from '@kodifaj/common';
import { createUser, getUser, getUserById } from '../users/users.handlers';
import { CreateUserModel } from '@kodifaj/common';

const GitHubStrategy = require('passport-github2').Strategy;

export default function passportService(): void {
  passport.serializeUser((user: User, done) => {
    done(undefined, user._id);
  });

  passport.deserializeUser((id, done) => {
    getUserById(id as string).then((user) => {
      done(undefined, user);
    });
  });

  passport.use(
    new GitHubStrategy(
      {
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        callbackURL: '/auth/github/callback',
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
      ) => {
        const existingUser = await getUser({
          githubId: profile.id,
        } as User);

        if (existingUser) {
          return done(undefined, existingUser);
        }

        const createdUser = new CreateUserModel(profile);
        createUser(createdUser.get())
          .then(() => {
            done(undefined, createdUser);
          })
          .catch((e: Error) => {
            done(e);
          });
      },
    ),
  );
}