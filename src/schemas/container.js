const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLList
} = require('graphql');

const ContainerType = new GraphQLObjectType({
    name: "Container",
    fields: {
        id: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        context: {
            type: new GraphQLObjectType({
                name: "Context",
                fields: {
                    type: {
                        type: GraphQLString
                    }
                }
            })
        },
        data: {
            type: new GraphQLList(new GraphQLObjectType({
                name: "Block",
                fields: {
                    id: {
                        type: GraphQLString
                    },
                    type: {
                        type: GraphQLString
                    }
                }
            }))
        }
    }
})

module.exports = ContainerType;