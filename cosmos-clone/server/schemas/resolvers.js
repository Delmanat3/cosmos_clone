const { AuthenticationError } = require('apollo-server-express');
const { User,Thread } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers={

    Query:{
        users: async ()=>{
            return User.find();
        },
        user: async (parent,{userid})=>{
            return await User.findOne({_id:userid});
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
    


