import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { apolloClient } from "../configs/apolloClient";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export default App;
