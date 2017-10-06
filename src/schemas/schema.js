
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
const covers = require("../mocks/coverList");

const getCoverBySectionName = (section) => {
    const cover = covers.filter((cover) => {
        return cover.section === section
    });
    resolve(cover);
} 


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
            resolve: (_, args) => getCoverById(args.id)
        }
    }
});

const schema = new graphql.GraphQLSchema({
    query: RootQuery
});

module.exports = schema;