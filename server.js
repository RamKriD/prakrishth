const express = require("express");
const fs = require("fs");

const https = require("https");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const ApolloServer = require("apollo-server-express").ApolloServer;
const resolvers = require("./server/resolvers.graphql");
const typeDefs = require("./server/schema.graphql");

require("dotenv").config();

const httpsPort = process.env.port || 5443;

const baseApp = express();

const key = fs.readFileSync("./CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync("./CA/localhost/localhost.crt");

const authRouter = require("./server/auth");


const userRouter = require("./server/users");

/**
 * Session Configuration (New!)
 */
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

// if (baseApp.get("NODE_ENV") === "production") {
// Serve secure cookies, requires HTTPS
session.cookie.secure = true;
// }

/**
 * Passport Configuration (New!)
 */
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    /**
     * Access tokens are used to authorize users to an API
     * (resource server)
     * accessToken is the token to call the Auth0 API
     * or a secured third-party API
     * extraParams.id_token has the JSON Web Token
     * profile has all the information from the user
     */
    return done(null, profile);
  }
);

/**
 *  App Configuration
 */

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};

baseApp.set("view engine", "html");
baseApp.engine("html", require("ejs").renderFile);

baseApp.use(express.static(__dirname + "/dist"));

baseApp.use(expressSession(session));

passport.use(strategy);

baseApp.use(passport.initialize());
baseApp.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

baseApp.use((req, res, next) => {
  console.log(req.socket.localAddress)
  console.log(req.socket.address())
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

baseApp.use("/", authRouter);
baseApp.use("/api/users", userRouter);
baseApp.get("*", (req, res, next) => {
  res.render(__dirname + "/dist/index");
});

console.log(cert)

const server = https.createServer({ key, cert }, baseApp);
let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: baseApp });
}
startServer();

/*  HTTP Server Not Required as or now. 
    @TODO find a way to redirect from http to https Toto
*/
// baseApp.listen(httpPort, () => {
//   console.log(`Server is listening on https://localhost:${httpPort}`);
// })

server.listen(httpsPort, () => {
  console.log(`Server is listening on https://localhost:${httpsPort}`);
  console.log(`Server is listening on ${apolloServer.graphqlPath}`);
});
