const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const DroplineType = new GraphQLObjectType({
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

module.exports = DroplineType;