import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./Component";

function GroupText({ text, color = "black", fontsize = 16 }) {
  const styleObj = {
    color: color,
    fontSize: fontsize,
    textAlign: "center",
    padding: 10,
  };

  return (
    <div>
      <div onClick={Component} style={styleObj}>
        {text}
      </div>
    </div>
  );
}

export default GroupText;
