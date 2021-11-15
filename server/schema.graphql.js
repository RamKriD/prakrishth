const gql = require("apollo-server-express").gql;

const typeDefs = gql`
  type User {
    aud: String
    email: String
    email_verified: Boolean
    name: String
    nickname: String
    picture: String
    sub: String
    updated_at: String
    isActive: Boolean
    sessionToken: String
  }

  input UserInput {
    aud: String
    email: String
    email_verified: Boolean
    name: String
    nickname: String
    picture: String
    sub: String
    updated_at: String
    isActive: Boolean
    sessionToken: String
  }

  type Query {
    getAllUser: [User]
    findAUser(email: String): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;

module.exports = typeDefs;