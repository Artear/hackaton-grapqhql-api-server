const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} = require('graphql');

const CoverType = require('./cover');
const ArticleContentType = require('./articleContent');
const covers = require("../../mocks/coverList");
const articles = require("../../mocks/articleList");
const medias = require("../../mocks/mediaList");
const MediaContentType = require("./mediaContent");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        cover: {
            type: CoverType,
            args: {
                section: {
                    type: GraphQLString
                }
            },
            resolve: (_, args) => {
                return new Promise((resolve) => {
                    const [cover] = covers.filter((cover) => {
                        return cover.section === args.section
                    });
                    resolve(cover);
                });
            }
        },

        articles: {
            type: new GraphQLList(ArticleContentType),
            args: {
                ids: {
                    type: new GraphQLList(GraphQLString)
                }
            },
            resolve: (_, {ids}) => {
                return new Promise((resolve) => {

                    if(!ids)
                        resolve(articles);

                    const articlesFiltered = articles.filter((article) => {
                        return ids.includes(article.articleId)
                    });

                    resolve(articlesFiltered);
                });
            }
        },

        medias: {
            type: new GraphQLList(MediaContentType),
            args: {
                ids: {
                    type: new GraphQLList(GraphQLString)
                }
            },
            resolve: (_, {ids}) => {
                return new Promise((resolve) => {

                    if(!ids)
                        resolve(medias);

                    const mediasFiltered = medias.filter((media) => {
                        return ids.includes(media.mediaId)
                    });

                    resolve(mediasFiltered);
                });
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;