import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_GQL_HOST,
  }),
});

export default apolloClient;
