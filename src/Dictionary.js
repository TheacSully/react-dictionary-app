import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import searchlogo from "./searchlogo.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  //function handleResponse(response) {
  //console.log(response.data.meanings[0].definition);
  //setResults(response.data.meanings[0].definition);
  //setResults("fishing");
  //console.log(results);
  //}

  function search(event) {
    event.preventDefault();
    //alert(`searching for definition of "${keyword}"`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //let apiKey = "ct90a4732c5fd752o670f2a66b23ca38";
    // let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Type a word"
          />
          <button>
            <img src={searchlogo} alt="search logo" />
          </button>
        </form>
        <div className="hint">
          Suggested Words: Bears, Beets or Battlestar Galactica
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
