import "../app/styles/app.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "@/app/api/graphql/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
