const rescue = require('express-rescue');
const NextAuth = require('next-auth').default;
const GoogleProvider = require('next-auth/providers/google').default;
const SequelizeAdapter = require('@next-auth/sequelize-adapter').default;

const db = require('../../../db');

db.sync();

const baseUrl = '/api/auth/';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // adapter: SequelizeAdapter(db),
  secret: process.env.OPTIONS_SECRET
};

module.exports = rescue(async (req, res, next) => {
  if (!req.url.startsWith(baseUrl)) {
    return next();
  }
  // Fill in the "nextauth" [catch all route parameter](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)
  req.query.nextauth = req.url // start with request url
    .slice(baseUrl.length) // make relative to baseUrl
    .replace(/\?.*/, '') // remove query part, use only path part
    .split('/'); // as array of strings
  await NextAuth(req, res, options);
});
