import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="text-center"> Coded by Thea Sullivan</footer>
      </div>
    </div>
  );
}
