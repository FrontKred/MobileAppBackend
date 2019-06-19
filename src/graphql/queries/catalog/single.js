import {GraphQLID, GraphQLNonNull} from 'graphql';

import {Catalog} from "../../types/catalog/";

import CatalogModel from "../../../models/catalog";

export default {
    type: Catalog,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params,options){
        return CatalogModel
            .findById(params._id)
            .exec();
    }
}
