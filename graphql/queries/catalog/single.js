import {GraphQLID, GraphQLNonNull} from 'graphql';

import catalogType from "../../types/catalog/catalog";
import CatalogModel from "../../../models/catalog";

export default {
    type: catalogType,
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
