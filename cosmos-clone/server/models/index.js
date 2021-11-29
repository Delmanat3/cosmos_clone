const router=require('express').Router()
const User=require('./User');
const Coin=require('./Coin');

module.exports={
    User:User,
    Coin:Coin
}