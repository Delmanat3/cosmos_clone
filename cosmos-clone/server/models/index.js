const router=require('express').Router()
const User=require('./User');
const Thread=require('./Thread');

module.exports={
    User:User,
    Thread:Thread
}