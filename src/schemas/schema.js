const graphql = require('graphql');


const BlockListType = new graphql.GraphQLObjectType({
    name: 'blocks',
    fields: () => ({
    block_list: {
        type: graphql.GraphQLString,
        args: {
            type: {
                type: graphql.GraphQLString
            }
        }
    }
})
});

const RootQuery = new graphql.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        cover: {
            resolve: () => {
                return new Promise(() => {

                })
            }
        }
    }
});

const schema = new graphql.GraphQLSchema({
    query: RootQuery
});

module.exports = schema;