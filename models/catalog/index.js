import mongoose from 'mongoose';

const CatalogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Catalog', CatalogSchema);