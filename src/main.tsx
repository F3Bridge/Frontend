import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import Web3Provider from "./components/Web3Provider";
import "./index.css";

import { store } from "./store";
import { setupAxiosInterceptors } from "./utils";

setupAxiosInterceptors(store);

const client = new ApolloClient({
  uri: "https://api-mumbai.lens.dev/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </Web3Provider>
    </Provider>
  </React.StrictMode>
);
