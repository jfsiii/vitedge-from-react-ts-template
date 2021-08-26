import React from "react";

import "./App.css";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

import { renderRoutes } from "react-router-config";
import { Context } from "vitedge/react";

function App(ctx: Context, unknown: unknown) {
  console.count('app called')
  console.log("App", Object.keys(ctx));
  const { router } = ctx;
  return (
    <div className="App">
      <AppHeader />
      {renderRoutes(router.routes)}
      <AppFooter />
    </div>
  );
}

export default App;
