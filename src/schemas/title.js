const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const TitleType = new GraphQLObjectType({
    name: "Title",
    fields: {
        main: {
            type: GraphQLString
        },
        social: {
            type: GraphQLString
        },
        headline: {
            type: GraphQLString
        }
    }
})

module.exports = TitleType;