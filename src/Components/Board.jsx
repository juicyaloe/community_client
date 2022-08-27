import React from "react";
import ReactDOM from "react-dom/client";
import GroupText from "./GroupText";
import "./Board.css";

function AAA() {
  return (
    <div>
      <div className="mainBox">
        <GroupText text="게시판" color="white" fontsize={35} />
        <GroupText text="1번 게시판" />
        <GroupText text="2번 게시판" />
        <GroupText text="3번 게시판" />
        <GroupText text="4번 게시판" />
        <GroupText text="5번 게시판" />
      </div>
    </div>
  );
}

export default AAA;
