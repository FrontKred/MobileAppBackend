import {
    GraphQLNonNull,
} from "graphql";
import CatalogModel from "../../../models/catalog";
import catalogType from "../../types/catalog/catalog";
import catalogInputType from "../../types/catalog/catalog-input";

export default {
    type: catalogType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(catalogInputType)
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
}