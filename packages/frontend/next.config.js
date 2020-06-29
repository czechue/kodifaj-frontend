require('dotenv').config();

module.exports = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    AUTH_URL:
      process.env.NODE_ENV === 'production'
        ? `https://api.kodifaj.pl/auth/github`
        : 'http://localhost:8080/auth/github',
    API_URL:
      process.env.NODE_ENV === 'production'
        ? `https://api.kodifaj.pl/api`
        : 'http://localhost:8080/api',
  },
};
