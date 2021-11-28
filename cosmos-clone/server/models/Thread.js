const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const threadSchema = new Schema({
	title: {
		type: String,
		required: [true, 'You must provide a title for your thread'],
		trim: true,
		minLength: [ 4, 'Provide a title with at least 3 characters' ],
		maxLength: [ 36, 'Provide a title with less than 128 characters' ]
	},
    saved_coins:[{
    type:Schema.Types.ObjectId,
    ref:'User'
    }],
	date_added: {
        type: Date,
        default: Date.now,
		get: (timestamp) => dateFormat(timestamp)
    }
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;