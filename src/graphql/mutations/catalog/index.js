import {GraphQLNonNull, GraphQLID} from "graphql";
import CatalogModel from "../../../models/catalog";
import {Catalog} from "../../types/catalog/";
import {CatalogInput} from "../../types/catalog/";


const createCatalog = {
    type: Catalog,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(CatalogInput)
        }
    },
    async resolve(root, params) {
        const catalogModel = new CatalogModel(params.data);
        const newCatalog = await catalogModel.save();
        if (!newCatalog) {
            throw new Error('Error add new catalog');
        }
        return newCatalog;
    }
};

const removeCatalog = {
    type: Catalog,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve(root, params) {
        const removedCatalog = await CatalogModel
            .findByIdAndDelete(params._id)
            .exec();
        if (!removedCatalog) {
            throw new Error('Error removing catalog');
        }
        return removedCatalog;
    }
};


export default {createCatalog, removeCatalog}