import React from "react";
import "./Feature.css";
function Feature(props) {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{props.title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Feature;
