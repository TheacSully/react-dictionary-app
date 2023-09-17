import React from "react";
import "./App.css";
import dictionaryHead from "./dictionaryHead.png";
import theasullivan from "./theasullivan.png";
import opensource from "./opensource.png";
import github from "./github.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionaryHead} alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="coffee" />
        </main>
        <footer className="text-center">
          {" "}
          Coded by <img src={theasullivan} alt="Thea Sullivan" /> and{" "}
          <img src={opensource} alt="Open Source" /> on{" "}
          <a href="https://github.com/TheacSully/react-dictionary-app">
            <img src={github} alt="Github link" />{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
