const router=require('express').Router()
const User=require('./User');
const Coin=require('./Coin');
const Graph=require('./Graphs')

module.exports={
    User:User,
    Coin:Coin,
    Graph:Graph
}