const graphql = require('graphql');
const TitleType = require('./title');

export default new graphql.GraphQLObjectType({
    name: 'articleContent',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        type: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLList(TitleType)
        }
    })
});