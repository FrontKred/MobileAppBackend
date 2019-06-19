import mongoose from "mongoose";

let connectDB;
if (process.env.NODE_ENV === 'development') {
    connectDB=mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@nodeapp-e3fmc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
        {useNewUrlParser: true});
}else{
    connectDB= mongoose.connect('mongodb://mongo:27017/projectCM', {useNewUrlParser: true});
}

export default connectDB;


