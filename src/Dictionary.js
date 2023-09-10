import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import searchlogo from "./searchlogo.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data.meanings[0].definition);
    setResults(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    //alert(`searching for definition of "${keyword}"`);
    let apiKey = "ct90a4732c5fd752o670f2a66b23ca38";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button>
          <img src={searchlogo} alt="search logo" />
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
