const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const coinSchema = new Schema({
	name: {
		type: String,
		required: [true, 'You must provide a title for your thread'],
		trim: true,
	},
	description:{
		type:String,
	},
	links:[{
		type:String,
	}],
	coinId:{
		type:String
	},
	images:[{
		type:String,
	}],
	price:[{
		type:String,
	}],
	supply:{
		type:String
	},
	date_added: {
        type: Date,
        default: Date.now,
		get: (timestamp) => dateFormat(timestamp)
    }
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;