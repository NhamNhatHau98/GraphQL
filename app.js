const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests with module cors
app.use(cors());

//connect to a mlab database
mongoose.connect('mongodb+srv://NhamNhatHau:Iungochan2010@cluster0.ztwld.mongodb.net/test', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

//set up a midleware for all request ()
app.use('/graphql', graphqlHTTP({
    schema: schema, //or ES6 schema <=> schema: schema
    graphiql: true,
}))

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000 ')
})