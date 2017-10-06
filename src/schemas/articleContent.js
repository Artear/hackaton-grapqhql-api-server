const graphql = require('graphql');
const TitleType = require('./title');
const DroplineType = require('./dropline');
const BodyType = require('./body');
const MediaContent = require('./mediaContent');
const authorMediaType = require('./author');
const tagType = require('./tag');
const peopleType = require('./people');
const sectionType = require('./section');

const articleContentType = new graphql.GraphQLObjectType({
    name: 'articleContent',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        articleId: {
            type: graphql.GraphQLString
        },
        type: {
            type: graphql.GraphQLString
        },
        title: {
            type: TitleType
        },
        dropline: {
            type: DroplineType
        },
        body: {
            type: new graphql.GraphQLList(BodyType)
        },
        media: {
            type: new graphql.GraphQLList(MediaContent)
        },
        changedISO: {
            type: graphql.GraphQLString
        },
        createdISO: {
            type: graphql.GraphQLString
        },
        uri: {
            type: graphql.GraphQLString
        },
        author: {
            type: authorMediaType
        },
        tagList: {
            type:new  graphql.GraphQLList(tagType)
        },
        peopleList: {
            type: new graphql.GraphQLList(peopleType)
        },
        cover: {
            type: tagType
        },
        section: {
            type: sectionType
        }
    })
});

module.exports = articleContentType;