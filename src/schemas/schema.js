
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
const covers = require("../../mocks/coverList");

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
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;