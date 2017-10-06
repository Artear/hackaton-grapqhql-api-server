const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const PeopleType = new GraphQLObjectType({
    name: "People",
    field: {
        name: {
            type: GraphQLString
        },
        machineName: {
            type: GraphQLString
        }
    }
});

module.exports = PeopleType;