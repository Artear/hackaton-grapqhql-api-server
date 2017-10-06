const graphql = require('graphql');


export default new graphql.GraphQLObjectType({
    name: 'articleContent',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        type: {
            type: graphql.GraphQLString
        }
    })
});