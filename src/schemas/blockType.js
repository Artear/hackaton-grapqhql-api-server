const graphql = require('graphql');

const BlockItem = require('./blockItem');


const BlockContentType = new graphql.GraphQLObjectType({
    name: 'block',
    fields: () => ({
        items: {
            type: graphql.GraphQLList(BlockItem)
        }

    })
});

const BlockType = new graphql.GraphQLObjectType({
    name: 'block',
    fields: () => ({
        id: {
            type: new graphql.GraphQLString()
        },
        type: {
            type: new graphql.GraphQLString()
        },
        content: {
            type: new graphql.GraphQLObjectType(BlockContentType)
        }
    })
});

module.exports = BlockType;