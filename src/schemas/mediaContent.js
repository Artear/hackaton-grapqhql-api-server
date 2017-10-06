const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLList
} = require('graphql');

const MediaContentType = new GraphQLObjectType({
    name: 'MediaContent',
    fields: () => ({
        metadata: {
            type: Metadata,
        },
        mediaId: {
            type: GraphQLString,
        },
        source: {
            type: Source,
        }
    })
});

const Metadata = new GraphQLObjectType({
    name: 'Metadata',
    fields: () => ({
        tagList: {
            type: new GraphQLList(GraphQLString),
        },
        createdISO: {
            type: GraphQLString,
        },
    })
});

const Source = new GraphQLObjectType({
    name: 'Source',
    fields: () => ({
        type: {
            type: GraphQLString,
        },
        value: {
            type: GraphQLString,
        },
        origin: {
            type: GraphQLString,
        }
    })
});

module.exports = MediaContentType;