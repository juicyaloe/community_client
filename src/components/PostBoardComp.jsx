/************************************************
 * PostBoard 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { getBoardList } from "../funcs/boardManage";

var selectedBoardIdx = 1;
var postInfo = {
  title: "제목",
  content: "내용",
};

function selectBoard() {
  var boardList = getBoardList();
  var OptionList = [];

  for (var i = 1; i < boardList.length; i++) {
    OptionList.push(
      <option key={i} value={i}>
        {boardList[i][0]}
      </option>
    );
  }

  return (
    <div class="col-3">
      <select
        onChange={(e) => console.log(e.target.value)}
        class="form-select "
        aria-label="Default select example"
      >
        {OptionList}
      </select>
    </div>
  );
}
function PostBtnClicked() {
  console.log(selectedBoardIdx);
}
function PostBoardComp(props) {
  return (
    <div>
      <div class="row">
        {selectBoard()}
        <div class="col-9">
          <input type="text" placeholder="글 제목" class="form-control " />
        </div>
      </div>
      <textarea
        class="form-control  mt-2"
        placeholder="글을 작성하세요"
        id="floatingTextarea"
        style={{
          width: "100%",
          height: "400px",
          resize: "none",
        }}
      ></textarea>
      <div class="d-grid gap-2 mt-2">
        <button class="btn btn-primary" type="button" onClick={PostBtnClicked}>
          글 작성
        </button>
      </div>
    </div>
  );
}

export default PostBoardComp;
