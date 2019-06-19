import jwt from 'jsonwebtoken';
import fs from 'fs';

const is_auth = (req, res, next) => {
    const authForHeader=req.get('Authorization');
    if(!authForHeader){
        req.isAuth=false;
        return next();
    }
    const token=authForHeader.split(' ')[1];
    if(!token || token===''){
        req.isAuth=false;
        return next();
    }
    let decodedToken;
    try {
        const privateKEY  = fs.readFileSync('./private.key', 'utf8');
        decodedToken = jwt.verify(token, privateKEY);
    } catch(err) {
        req.isAuth=false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth=true;
    req.userId=decodedToken.userId;
    next();
};
export default is_auth;