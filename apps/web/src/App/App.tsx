import { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return <div>{children}</div>;
}

export default App;
