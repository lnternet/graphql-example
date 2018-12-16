var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var data = require('./data.json');

//*********** Server setup ************
var app = express();
app.listen(3000);

//*********** GraphQL setup ***********
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    getPersonById(id: Int!): Person
  }
  type Person {
    id: Int!
    name: String!
    surname: String!
  }
  type Mutation {
    changeName(id: Int!, name: String!): Person
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  getPersonById: function({id}) {
    return findPersonById(id);
  },
  changeName: function({id, name}) {
    data.people[id].name = name;
    return data.people[id];
  }
};


//********** Endpoints ****************
app.post('/ping', function(req, res) {
  res.status(200).send('pong');
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

function findPersonById(id) {
  return data.people[id];
}
