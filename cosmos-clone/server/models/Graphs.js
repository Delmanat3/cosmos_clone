const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const graphSchema = new Schema({
	title: {
		type: String,
	},
	categories:[{
		type:String,
	}],
	description:{
		type:String,
	},
	image:{
		type:String
	},
	date:{
		type:String,
	},
	source:{
		type:Object,
	},
	url:{
		type:String
	},
	snip:String,
	desc:String
	
});

const Graph = mongoose.model('Graph', graphSchema);

module.exports = Graph;