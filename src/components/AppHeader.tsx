import React from "react";
import { Link } from 'react-router-dom'
import logo from "../logo.svg";

export default function AppHeader() {
  return (
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
    </header>
  );
}
