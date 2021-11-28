const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const db = require('./config/connection');
const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3000;
const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers
});

app.use(logger('dev'));

server.applyMiddleware({ app });

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

//* set up server to listen on port and open connection to graphql
db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}!`);
		console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
	});
});
