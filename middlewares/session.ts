// import { session, promisifyStore, Store, MemoryStore } from 'next-session';
// import connectMongo from 'connect-mongo';
//
// // @ts-ignore
// const MongoStore = connectMongo({ Store, MemoryStore });
//
// export default function (req, res, next) {
//   const mongoStore = new MongoStore({
//     client: mongoose, // see how we use req.dbClient from the previous step
//     stringify: false,
//   });
//   return session({
//     store: promisifyStore(mongoStore),
//   })(req, res, next);
// }
export default 3;
