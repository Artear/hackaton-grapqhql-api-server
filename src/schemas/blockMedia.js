const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');
const MediaType = require('./media');

const blockMediaType = new GraphQLObjectType({
    name: 'BlockMedia',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
        content: {
            type: MediaType,
        }
    })
});

module.exports = blockMediaType;