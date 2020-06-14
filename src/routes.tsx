import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/index";
import CreatePoint from "./pages/CreatePoint/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/create-point" component={CreatePoint} />
    </BrowserRouter>
  );
};

export default Routes;
