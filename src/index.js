import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import FavoriteProvider from "./store/favorites-context";

ReactDOM.render(
  <FavoriteProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteProvider>,
  document.getElementById("root")
);
