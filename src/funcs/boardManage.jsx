import React from "react";
var boardList = [
  ["전체 게시판", "all"],
  ["자동차 게시판", "car"],
  ["비행기 게시판", "airplane"],
];

export function getBoardList() {
  return boardList;
}

function selectBoard() {
  var OptionList = [];

  OptionList.push(
    <option value={0} selected>
      {boardList[0][0]}
    </option>
  );
  for (var i = 1; i < boardList.length; i++) {
    OptionList.push(<option value={i}>{boardList[i][0]}</option>);
  }

  return (
    <select class="form-select" aria-label="Default select example">
      {OptionList}
    </select>
  );
}
