require('dotenv').config();

module.exports = {
  env: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
    MONGO_URI: process.env.MONGO_URI,
    VERCEL_URL: process.env.VERCEL_URL,
    COOKIE_KEY: process.env.COOKIE_KEY,
  },
};
