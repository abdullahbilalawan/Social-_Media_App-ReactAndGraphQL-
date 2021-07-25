const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const resolvers = require('./graphql/resolvers');
const {MONGODB} =  require('./config.js')

const typeDefs =  require('./graphql/typeDefs')


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
})

mongoose
.connect(MONGODB,{useNewUrlParser:true})
.then(()=>{
    console.log('MANGO DB Connected')
    return server.listen({port: 5000})
    



})


.then(res=>{
    console.log('Server listening on port 5000')
}) 
.catch(err=>{
    console.log('error is ', err)
})