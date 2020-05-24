import passport from "passport";
import { Profile, VerifyCallback } from "passport-google-oauth20";
import keys from "../config/keys";
import * as mongoose from "mongoose";
import { IUser } from "../models/User";

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

const User = mongoose.model("users");

export default function passportService() {
  passport.serializeUser((user: IUser, done) => {
    done(undefined, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(undefined, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ): Promise<void> => {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(undefined, existingUser);
        }

        try {
          const user = await new User({ googleId: profile.id }).save();
          done(undefined, user);
        } catch (e) {
          done("failing add new user");
        }
      }
    )
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        callbackURL: "/auth/github/callback"
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ) => {
        const existingUser = await User.findOne({
          githubId: profile.id
        } as IUser);

        if (existingUser) {
          return done(undefined, existingUser);
        }

        try {
          const user = await new User({
            githubId: profile.id,
            login: profile.displayName,
            photo: profile.photos ? profile.photos[0].value : ""
          } as IUser).save();
          done(undefined, user);
        } catch (e) {
          done("failing add new user");
        }
      }
    )
  );
}
