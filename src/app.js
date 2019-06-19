import express from 'express';
import bodyParser from 'body-parser';

import morgan from 'morgan';
import errorhandler from 'errorhandler';

import isAuth from './middleware/is-authorization';
import * as connectDB from './db';

import graphqlHTTP from 'express-graphql';
import schema from './graphql';


const port = 8080;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

/**
 * Protected Route
 */
app.use('/', isAuth);

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));


if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler());
}

app.use((req, res, next) => {
    let error;
    if (!req.isAuth) error = new Error("UnauthorizedError");
    else error = new Error("Not found");
    res.status(404).json({
        error: {
            message: error.message
        }
    });
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(port, () => {
    console.log('Server is running,listening port at:', port);
});
