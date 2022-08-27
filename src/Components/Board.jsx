import React from "react";
import ReactDOM from "react-dom/client";
import Group from "./Group";
import "./Board.css";

function AAA() {
  const [clickedIdx, changeIdx] = React.useState(0);

  function ClickFunc(idx) {
    changeIdx(idx);
    console.log(idx, "B Function");
  }
  return (
    <div>
      {clickedIdx}
      <div className="mainBox">
        <div className="mainText">
          게시판
          <Group index={0} text="1번 게시판" Clicked={ClickFunc} />
          <Group index={1} text="2번 게시판" Clicked={ClickFunc} />
          <Group index={2} text="3번 게시판" Clicked={ClickFunc} />
          <Group index={3} text="4번 게시판" Clicked={ClickFunc} />
          <Group index={4} text="5번 게시판" Clicked={ClickFunc} />
        </div>
      </div>
    </div>
  );
}

export default AAA;
