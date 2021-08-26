import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { renderRoutes } from "react-router-config";
import { Context } from "vitedge/react";

function App(ctx: Context, unknown: unknown) {
  console.count('app called')
  console.log("App", Object.keys(ctx));
  const { router } = ctx;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {renderRoutes(router.routes)}
    </div>
  );
}

export default App;
