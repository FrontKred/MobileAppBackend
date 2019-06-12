import {GraphQLList} from "graphql";
import catalogType from "../../types/catalog/catalog";
import CatalogModel from "../../../models/catalog";


export default {
    type:new GraphQLList(catalogType),
    args:{},
    resolve(root,params,options){
        return CatalogModel
            .find()
            .exec();
    }
};