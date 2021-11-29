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

type Coin{
    _id:ID!
name:String!
description:String
links:[String]
coinId:String!
images:[String]
price:[String]
supply:String
date_added:String!
}


type Auth{
    token:ID!
    user:User
}

type Query{
    users:[User]!
    coins:[Coin]!
    user(userid: ID!):User
    me:User
}

type Mutation {
    addData(name:String!,description:String,links:[String],coinId:String!,images:[String],price:[String],supply:String,date_added:String):Coin
    addUser(name: String!, email: String!, password: String!,pic:String,bio:String): Auth
    login(email: String!, password: String!): Auth
    removeUser: User

}
`
module.exports = typeDefs;