const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const BodyType = new GraphQLObjectType({
    name: "Body",
    fields: {
        type: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    }
});

module.exports = BodyType;