import {
    GraphQLNonNull,
    GraphQLID
} from "graphql";
import CatalogModel from "../../../models/catalog";
import catalogType from "../../types/catalog/catalog";


export default {
    type:catalogType,
    args:{
        _id:{
            name:'_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve( root, params,options){
        const removedCatalog = await CatalogModel
            .findByIdAndDelete(params._id)
            .exec();
        if(!removedCatalog){
            throw new Error('Error removing catalog');
        }
        return removedCatalog;
    }
}