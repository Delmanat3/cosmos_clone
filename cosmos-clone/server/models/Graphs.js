const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const graphSchema = new Schema({
	name: {
		type: String,
	},
	sparkline:[{
		type:String,
	}],
	high:[{
		type:Object,
	}],
	low:{
		type:String
	},
	current:[{
		type:String,
	}],
	updated:[{
		type:Object,
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

const Graph = mongoose.model('Graph', graphSchema);

module.exports = Graph;