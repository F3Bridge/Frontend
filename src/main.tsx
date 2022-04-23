import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Web3Provider from "./components/Web3Provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Web3Provider>
  </React.StrictMode>
);
