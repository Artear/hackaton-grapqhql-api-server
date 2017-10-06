const graphql = require('graphql');

const RootQuery = new graphql.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
    }
});

const schema = new graphql.GraphQLSchema({
    query: RootQuery
});

module.exports = schema;