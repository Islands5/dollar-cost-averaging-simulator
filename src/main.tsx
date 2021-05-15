import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { TopPage } from "./pages/top"
import { UserIndexPage } from "./pages/users"
import { UserShowPage } from "./pages/users/show"

import { ContextSample01Page } from "./pages/context_samples/sample_01"
import { ContextSample02Page } from "./pages/context_samples/sample_02"

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route exact path="/"                           component={ TopPage }></Route>
      <Route exact path="/users"                      component={ UserIndexPage }></Route>
      <Route exact path="/users/:userId"              component={ UserShowPage }></Route>
      <Route exact path="/context_samples/01"  component={ ContextSample01Page }></Route>
      <Route exact path="/context_samples/02"  component={ ContextSample02Page }></Route>
    </React.StrictMode>
  </BrowserRouter>,
  app
);