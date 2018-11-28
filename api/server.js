'use strict'
const awsServerlessExpress = require('aws-serverless-express')
var express = require('express');
var expressGraphQL = require('express-graphql');
const schema = require('./schema');
const resolver = require('./resolver');

var app = express();
app.get('/', (req, res) => {
  res.json(200, 'OK');
});

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: resolver,
  graphiql: false,
}));


app.use('/graphiql', expressGraphQL({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

const server = awsServerlessExpress.createServer(app)

if(!process.env.LAMBDA_TASK_ROOT) {
  app.listen(4000);
}

let cacheDB = null;

exports.handler = (event, context) => {
    console.log(event);
    return (awsServerlessExpress.proxy(server, event, context));
};