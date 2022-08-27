import React from "react";
import ReactDOM from "react-dom/client";
function Group({ index, text, Clicked, color = "black", fontsize = 16 }) {
  const styleObj = {
    color: color,
    fontSize: fontsize,
    textAlign: "center",
    padding: 10,
  };

  return (
    <div>
      <div index={index} onClick={() => Clicked(index)} style={styleObj}>
        {text}
      </div>
    </div>
  );
}

export default Group;
