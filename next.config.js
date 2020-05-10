require('dotenv').config();
//
// console.log({
//   VERCEL_URL: process.env.VERCEL_URL,
//   MONGO_URI: process.env.MONGO_URI,
// });

module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
    MONGO_URI: process.env.MONGO_URI,
    API_URL: `http://${process.env.VERCEL_URL}/api`,
  },
};
