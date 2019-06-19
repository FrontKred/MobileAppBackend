import {GraphQLList} from "graphql";
import {Catalog} from "../../types/catalog/";
import CatalogModel from "../../../models/catalog";


export default {
    type:new GraphQLList(Catalog),
    args:{},
    resolve(root,params,options){
        return CatalogModel
            .find()
            .exec();
    }
};