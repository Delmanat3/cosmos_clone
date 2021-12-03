const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;


const postSchema = new Schema({
    post_text: {
        type: String,
        required: true,
        maxLength: [ 240, 'Your post is too long!' ]
    },
    date_created: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    author: {
        type: String,
        ref:'User',
        required: true
    },
    reactions: [
        {
            type: String
        }
    ],
    comments: [
        {
            type: String,
           
        }
    ]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;