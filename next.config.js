require('dotenv').config();

module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
    MONGO_URI: process.env.MONGO_URI,
    API_URL: `http://${process.env.VERCEL_URL}/api`,
  },
};
