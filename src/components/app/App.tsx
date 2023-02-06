import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gentlemock } from "../../mocks/gentlemock";
import { gentleman } from "../gentlemen/gentleman";
import { Header } from "../header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
