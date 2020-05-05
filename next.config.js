require('dotenv').config();
//
// console.log({
//   VERCEL_URL: process.env.VERCEL_URL,
//   MONGO_URI: process.env.MONGO_URI,
// });

module.exports = {
  distDir: '_next',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
    MONGO_URI: process.env.MONGO_URI,
  },
};
