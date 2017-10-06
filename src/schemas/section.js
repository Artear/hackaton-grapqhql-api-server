const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const SectionType = new GraphQLObjectType({
    name: "Section",
    fields: {
        name: {
            type: GraphQLString
        },
        machineName: {
            type: GraphQLString
        },
        headline: {
            type: GraphQLString
        }
    }
});

module.exports = SectionType;