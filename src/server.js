const express = require("express");
const express_graphql = require("express-graphql");
const {buildSchema} = require("graphql");
const app = express();
const port = 3000;

//Schema for GrapgQL

let schema = buildSchema(`
type Query{
    message: String
}
`);


// resolver

let messageResolve =  function(){
    return "Message from grapql";
}

let root = {
    message:messageResolve
}

// express server and graphQL end point

app.use('/graphql',express_graphql({
    schema: schema,
    rootValue:root,
    graphiql:true
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))