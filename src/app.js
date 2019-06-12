import express from 'express';
import graphqlHTTP from 'express-graphql';
import * as Connect from './db';
import schema from '../graphql';


const port = 8080;
const app = express();

app.use('/graphql',graphqlHTTP(req=>({
    schema,
    pretty:true,
    graphiql: true
})));

const server = app.listen(port, () => {
    console.log('Listening port:', port);
});
