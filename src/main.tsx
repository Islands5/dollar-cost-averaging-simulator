import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { TopPage } from "./pages/top"

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route exact path="/dollar-cost-averaging-simulator"                           component={ TopPage }></Route>
    </React.StrictMode>
  </BrowserRouter>,
  app
);
