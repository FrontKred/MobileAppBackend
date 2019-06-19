import {GraphQLNonNull} from "graphql";
import UserModel from "../../../models/users";
import {User, UserInput} from "../../types/users/";
import bcrypt from 'bcrypt';
import {pick} from 'underscore';

const createUser = {
    type: User,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(UserInput)
        }
    },
    async resolve(root, params) {
        try{
            const existingUser=await UserModel.findOne({email:params.data.email});
            if (existingUser) throw new Error('User exists already.');
            const hashedPassword = await bcrypt.hash(params.data.password, 12);
            const newUser = new UserModel({
                email:params.data.email,
                password:hashedPassword
            });
            const result=await newUser.save();
            return pick(result,'_id','email');
        }catch (e) {
            throw e;
        }
    }
};


export default {createUser}