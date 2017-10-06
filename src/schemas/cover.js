
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} = require('graphql');
const TitleType = require('./title');
const ContainerType = require('./container');



const CoverType = new GraphQLObjectType({
    name: 'Cover',
    fields: {
        section: {
            type: GraphQLString,
        },
        title: {
            type: TitleType
        },
        containerList: {
            type: new GraphQLList(ContainerType)
        }
    }
});

module.exports = CoverType;