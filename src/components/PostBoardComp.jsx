/************************************************
 * PostBoard 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { getBoardList } from "../funcs/boardManage";
import { postWriting } from "../funcs/apis";
import { TOKEN } from "../funcs/TOKEN";
import {Link, Router, Routes, Route} from 'react-router-dom';
import { Provider, useSelector, useDispatch } from "react-redux";

const BOARDLIST = {
  ALL: 0,
  CAR: 1,
  AIRPLANE: 2
}

var selectedBoardIdx = 1;
var postInfo = {
  title: "",
  content: "",
};

async function PostBtnClicked() {
  let response = await postWriting(
    TOKEN,
    getBoardList()[selectedBoardIdx][1],
    postInfo.title,
    postInfo.content
  );
  console.log(response);
}

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
        onChange={(e) => (selectedBoardIdx = e.target.value)}
        class="form-select "
        aria-label="Default select example"
      >
        {OptionList}
      </select>
    </div>
  );
}
function PostBoardComp(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <div class="row">
        {selectBoard()}
        <div class="col-9">
          <input
            onChange={(e) => (postInfo.title = e.target.value)}
            type="text"
            placeholder="글 제목"
            class="form-control "
          />
        </div>
      </div>
      <textarea
        onChange={(e) => (postInfo.content = e.target.value)}
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
        <Link to="/">
          <button class="btn btn-primary" type="button" onClick={ function() {
            PostBtnClicked()
            dispatch({ type: "CHANGEINDEX", value: BOARDLIST.ALL });
          }}>
            글 작성
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostBoardComp;
