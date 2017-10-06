const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const DroplineType = new GraphQLObjectType({
    name: "Dropline",
    fields: () => ({
        type: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    })
});

module.exports = DroplineType;