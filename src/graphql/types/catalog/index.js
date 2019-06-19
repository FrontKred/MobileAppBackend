import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLID,
} from "graphql";

export const Catalog = new GraphQLObjectType({
    name: 'Catalog',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    })
});

export const CatalogInput = new GraphQLInputObjectType({
    name: 'CatalogInput',
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    })
});