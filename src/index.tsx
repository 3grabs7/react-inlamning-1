import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';

// url to our graphQL API
const httpLink = createHttpLink({
	uri: 'http://localhost:6969',
});

// init Apollo Client
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);

reportWebVitals();
