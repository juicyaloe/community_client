import React from "react";
import ReactDOM from "react-dom/client";

function Component(e) {
  const text = e.target.innerText;
  console.log(text, "Clicked");
}

export default Component;
