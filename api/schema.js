var { buildSchema } = require('graphql');


var schema = buildSchema(`
  type Query {
    post(id: String!): Post
    posts(skip: Int, take: Int): [Post]
  }

  type Post {
    id: String
    date: String
    title: String
    avatar: String
    name: String
    email: String
    body: String
    num_comments: Int
  }


`);

module.exports = schema;