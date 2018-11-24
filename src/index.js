import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "./styles.css";
import App from "./App.js";
import client from "./apolloClient.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
