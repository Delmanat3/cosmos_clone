const { gql } = require('apollo-server-express');


const typeDefs=`

type User {
    _id:ID!
    name:String!
    email:String!
    password:String!
    pic:String
    bio:String
    saved_coin:[String]!
}
type Graph{
    _id:ID!
    title:String!
    categories:[String]!
    description:String!
    image:String
    date:String
    source:String
    url:String
    snip:String
    desc:String

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

input newCoin{
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
    new(_id:ID!):Graph
    news:[Graph]!
    user(userid: ID!):User
    me:User
}

type Mutation {
    addData(coinData:newCoin):Coin
    addUser(name: String!, email: String!, password: String!,pic:String,bio:String): Auth
    addFav(coin:String!): User
    login(email: String!, password: String!): Auth
    removeUser: User

}
`
// addData(name:String!,description:String,links:[String],coinId:String!,images:[String],price:[String],supply:String,date_added:String):User

module.exports = typeDefs;