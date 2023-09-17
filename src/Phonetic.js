import React from "react";
import speaker from "./speaker.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img src={speaker} alt="speaker icon" />
        </a>
      </div>
    );
  } else {
    return <div className="PhoneticText">{props.phonetic.text}</div>;
  }
}
