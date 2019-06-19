import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType, GraphQLNonNull
} from 'graphql';


export const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});


export const UserInput = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});

export const AuthData = new GraphQLObjectType({
    name: 'AuthData',
    fields: () => ({
        userId: {type: GraphQLID},
        token: {type: GraphQLString},
        tokenExp: {type: GraphQLInt}
    })
});