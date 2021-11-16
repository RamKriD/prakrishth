const Users = require("./dbUtils");

/**
 * GraphQL Resolvers
 **/

const resolvers = {
  Query: {
    getAllUser: (root) => {
      return new Promise((resolve, reject) => {
        Users.find((err, users) => {
          if (err) reject(err);
          else resolve(users);
        });
      });
    },
    findAUser: (root, { email }) => {
      return new Promise((resolve, reject) => {
        Users.findOne({ email: email }, (err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    },
  },
  Mutation: {
    createUser: (root, { input }) => {
      const newUser = new Users({
        aud: input.aud,
        email: input.email,
        email_verified: input.email_verified,
        name: input.name,
        nickname: input.nickname,
        picture: input.picture,
        sub: input.sub,
        updated_at: input.updated_at,
        isActive: input.isActive,
        sessionToken: input.sessionToken,
      });

      newUser.id = newUser._id;

      return new Promise((resolve, reject) => {
        newUser.save((err) => {
          if (err) reject(err);
          else resolve(newUser);
        });
      });
    },
  },
};

module.exports = resolvers;