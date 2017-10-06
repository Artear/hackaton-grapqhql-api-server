const articleContentType = require("./articleContent");
const graphql = require('graphql');

const articleType = new graphql.GraphQLObjectType({
    name: 'article',
    fields: () => ({
        id: {
            type: graphql.GraphQLID
        },
        type: {
            type: graphql.GraphQLString
        },
        content: {
            type: articleContentType
        }
    })
});

module.exports = articleType;