const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: {
        name: {
            type: GraphQLString
        },
        picture: {
            type: GraphQLString
        }
    }
});

module.exports = AuthorType;