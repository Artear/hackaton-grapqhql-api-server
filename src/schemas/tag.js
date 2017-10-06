const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const TagType = new GraphQLObjectType({
    name: "Tag",
    fields: {
        name: {
            type: GraphQLString
        },
        machineName: {
            type: GraphQLString
        }
    }
});

module.exports = TagType;