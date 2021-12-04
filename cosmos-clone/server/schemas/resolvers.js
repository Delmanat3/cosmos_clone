const { AuthenticationError } = require('apollo-server-express');
const { User,Coin,Graph } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers={

    Query:{
      coins:async()=>{
        return Coin.find()
      },
        users: async ()=>{
            return User.find();
        },
        news: async ()=>{
          return Graph.find();
      },
        user: async (parent,{userid})=>{
            return await User.findOne({_id:userid});
        },
          new: async (parent,{ID})=>{
            return await Graph.findOne({_id:ID});
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },


    Mutation: {
        addUser: async (parent, { name, email, password }) => {
          const profile = await User.create({ name, email, password });
          const token = signToken(profile);
    
          return { token, profile };
        },
        login: async (parent, { email, password }) => {
          const profile = await User.findOne({ email });
    
          if (!profile) {
            throw new AuthenticationError('No profile with this email found!');
          }
    
          const correctPw = await profile.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(profile);
          return { token, profile };
        },
          addData:async(parent,{coinData})=>{
            const coinData1=await Coin.create(coinData)
            return coinData1
          },
        // Add a third argument to the resolver to access data in our `context`
       
        // Set up mutation so a logged in user can only remove their profile and no one else's
        removeUser: async (parent, args, context) => {
          if (context.user) {
            return User.findOneAndDelete({ _id: context.user._id });
          }
          throw new AuthenticationError('You need to be logged in!');
        },
        // Make it so a logged in user can only remove a skill from their own profile
       
      },
    };
    
    module.exports = resolvers;
    


