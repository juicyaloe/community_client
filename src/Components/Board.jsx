import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import Group from "./Group";
import "./Board.css";

function AAA() {
  const number = useSelector((state) => state.number);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [clickedIdx, changeIdx] = React.useState(0);

  function ClickFunc(idx) {
    changeIdx(idx);
    console.log(idx, "B Function");
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
        break;
    }
    return result;
  }

  return (
    <div>
      <div className="mainBox">
        <div className="mainText">
          <h3>게시판</h3>
          <Group index={1} text="1번 게시판" Clicked={ClickFunc} />
          <Group index={2} text="2번 게시판" Clicked={ClickFunc} />
          <Group index={3} text="3번 게시판" Clicked={ClickFunc} />
          <Group index={4} text="4번 게시판" Clicked={ClickFunc} />
          <Group index={5} text="5번 게시판" Clicked={ClickFunc} />
          <button onClick={() => dispatch({ type: "GET" })}></button>
          <button onClick={() => dispatch({ type: "PLUS" })}></button>
        </div>
      </div>

      <div className="contentBox">
        <SelectGroup />
        <h1>{number + "AAAA"}</h1>
      </div>
    </div>
  );
}
export default AAA;
