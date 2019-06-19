import {GraphQLNonNull,GraphQLString} from 'graphql';
import {AuthData} from "../../types/users/";
import UserModel from "../../../models/users";

import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const auth = {
    type: AuthData,
    args: {
        email: {
            name: 'email',
            type: GraphQLNonNull(GraphQLString)
        },
        password: {
            name: 'password',
            type: GraphQLNonNull(GraphQLString)
        },
    },
    async resolve(root, params) {
        let user = await UserModel.findOne({email: params.email});
        if (!user) throw new Error('User does not exist!');
        const isEqual = await bcrypt.compare(params.password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const privateKEY  = fs.readFileSync('./private.key', 'utf8');
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            privateKEY,
            {
                expiresIn: '1h'
            }
        );
        return { userId: user.id, token: token, tokenExpiration: 1 };
    }
};



export default {
    auth
}