import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const mainEndpoint = new HttpLink({
  uri: import.meta.env.VITE_API_END_POINT,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_NETWORK_TOKEN}`,
  },
  // fetchOptions: {
  //   mode: "no-cors",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // },
});

// const globalEndpoint = new HttpLink({
//   uri: import.meta.env.VITE_API_END_POINT_GLOBAL,
// });

const apolloClient = new ApolloClient({
  link: mainEndpoint,
  cache: new InMemoryCache(),
});

export { apolloClient };
