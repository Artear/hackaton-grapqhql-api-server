const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const PeopleType = new GraphQLObjectType({
    name: "People",
    fields: {
        name: {
            type: GraphQLString
        },
        machineName: {
            type: GraphQLString
        }
    }
});

module.exports = PeopleType;