import React from "react";
import "./App.css";
import dictionaryHead from "./dictionaryHead.png";
import theasullivan from "./theasullivan.png";
import opensource from "./opensource.png";
import github from "./github.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="header">
          <img src={dictionaryHead} alt="dictionary logo" />
        </header>
        <Dictionary />
        <footer className="text-center">
          {" "}
          Coded by <img src={theasullivan} /> and <img src={opensource} /> on{" "}
          <a href="https://github.com/TheacSully/react-dictionary-app">
            <img src={github} />{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
