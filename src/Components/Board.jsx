import React from "react";
import ReactDOM from "react-dom/client";
import Group from "./Group";
import "./Board.css";

function AAA() {
  const [clickedIdx, changeIdx] = React.useState(0);
  var data;

  function ClickFunc(idx) {
    changeIdx(idx);
    console.log(idx, "B Function");
  }

  async function GetJson() {
    await fetch("file.json")
      .then(function (response) {
        return response.json();
      })
      .then(
        function (json) {
          data = json;
        }.bind(this)
      );
    console.log(data);
  }

  function SelectGroup() {
    var result;
    switch (clickedIdx) {
      case 0:
        result = <div>첫 화면</div>;
        break;
      case 1:
        result = <div>게시판1</div>;
        break;
      case 2:
        result = <div>게시판2</div>;
        break;
      case 3:
        result = <div>게시판3</div>;
        break;
      case 4:
        result = <div>게시판4</div>;
        break;
      case 5:
        result = <div>게시판5</div>;
        GetJson();
        break;
    }
    return result;
  }

  return (
    <div>
      {clickedIdx}
      <div className="mainBox">
        <div className="mainText">
          <h3>게시판</h3>
          <Group index={1} text="1번 게시판" Clicked={ClickFunc} />
          <Group index={2} text="2번 게시판" Clicked={ClickFunc} />
          <Group index={3} text="3번 게시판" Clicked={ClickFunc} />
          <Group index={4} text="4번 게시판" Clicked={ClickFunc} />
          <Group index={5} text="5번 게시판" Clicked={ClickFunc} />
        </div>
      </div>

      <div className="contentBox">
        <SelectGroup />
      </div>
    </div>
  );
}
export default AAA;
