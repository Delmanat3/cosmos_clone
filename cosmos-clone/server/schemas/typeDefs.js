const { gql } = require('apollo-server-express');


const typeDefs=`

type User {
    _id:ID!
    name:String!
    email:String!
    password:String!
    pic:String
    bio:String
}

type Thread{
    _id:ID!
title:String!
saved_coins:[Thread]
date_added:String!
}

type Auth{
    token:ID!
    user:User
}

type Query{
    users:[User]!
    threads:[Thread]!
    user(userid: ID!):User
    me:User
}

type Mutation {
    addUser(name: String!, email: String!, password: String!,pic:String,bio:String): Auth
    login(email: String!, password: String!): Auth
    removeUser: User

}
`
module.exports = typeDefs;