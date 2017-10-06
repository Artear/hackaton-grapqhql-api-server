const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');
const TitleType = require('./title');
const DroplineType = require('./dropline');
const MediaContent = require('./mediaContent');

const mediaType = new GraphQLObjectType({
    name: 'Media',
    fields: () => ({
        title: {
            type: TitleType,
        },
        dropline: {
            type: DroplineType,
        },
        media: {
            type: MediaContent,
        }
    })
});

module.exports = mediaType;