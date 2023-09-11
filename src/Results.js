import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    //console.log("What does props contain?  : ");
    // console.log(typeof props);
    // const resultsArray = Object.values(props.results);
    //console.log("What does resultsArray contain?  : ");
    //console.log(typeof resultsArray);
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
