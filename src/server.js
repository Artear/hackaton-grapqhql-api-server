/**
 * GRAPHQL SERVER
 *
 * */

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const cors = require('cors');

const app = express();
app.use(express.static(__dirname));
app.use('/graphql', cors(), graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(80, function() {
    console.log("Server up!...")
});