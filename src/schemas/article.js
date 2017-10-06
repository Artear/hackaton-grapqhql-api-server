import articleContentType from "./articleContent";

const graphql = require('graphql');


export default new graphql.GraphQLObjectType({
    name: 'article',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        type: {
            type: graphql.GraphQLString
        },
        content: {
            type: graphql.GraphQLList(articleContentType)
        }
    })
});