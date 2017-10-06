const article = require("./article");
const graphql = require('graphql');

const articleListType = new graphql.GraphQLObjectType({
    name: 'articles',
    fields: () => ({
        articles: {
            type: new graphql.GraphQLList(article)
        }
    })
});

module.exports = articleListType;