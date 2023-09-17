import React from "react";
import speaker from "./speaker.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={speaker} alt="speaker icon" />
      </a>
      {props.phonetic.text}
    </div>
  );
}
