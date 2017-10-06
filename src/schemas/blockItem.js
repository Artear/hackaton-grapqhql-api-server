const graphql = require('graphql');

const TitleType = require('./title');

// Article, Media, etc
const BlockItem = new graphql.GraphQLInterfaceType({
        id: {
            type: new graphql.GraphQLString()
        },
        title: {
            type: new graphql.GraphQLObjectType(TitleType)
        },
        content: {
            type: new graphql.GraphQLObjectType()
        }
});