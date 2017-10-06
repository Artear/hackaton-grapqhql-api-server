const {
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const ContainerType = new GraphQLObjectType({
    name: "Container",
    fields: {
        id: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        }
    }
})

module.exports = ContainerType;