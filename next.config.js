require('dotenv').config();

module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
    MONGO_URI: process.env.MONGO_URI,
    DB_NAME: process.env.DB_NAME,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    API_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://kodifaj.pl/api'
        : 'http://localhost:3000/api',
  },
};
