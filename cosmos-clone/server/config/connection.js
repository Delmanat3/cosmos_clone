const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cosmos_clone', {
	useNewUrlParser: true,
	// useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

module.exports = mongoose.connection;