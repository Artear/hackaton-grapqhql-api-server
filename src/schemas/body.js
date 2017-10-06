const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const BodyType = new GraphQLObjectType({
    name: "Dropline",
    field: {
        type: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    }
});

module.exports = BodyType;