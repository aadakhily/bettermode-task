import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apiEndpoint = new HttpLink({
  uri: import.meta.env.VITE_API_END_POINT,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_NETWORK_TOKEN}`,
  },
});

const apolloClient = new ApolloClient({
  link: apiEndpoint,
  cache: new InMemoryCache(),
});

export { apolloClient };
