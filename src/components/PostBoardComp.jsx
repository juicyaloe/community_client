/************************************************
 * PostBoard 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { boardList, BOARDLIST, BOARDINDEX } from "../funcs/boardManage";
import { postWriting } from "../funcs/apis";
import {Link, Router, Routes, Route} from 'react-router-dom';
import { Provider, useSelector, useDispatch } from "react-redux";

var selectedBoardIdx = 1;
var postInfo = {
  title: "",
  content: "",
};

async function PostBtnClicked(token) {
  let response = await postWriting(
    token,
    boardList[selectedBoardIdx][BOARDINDEX.URL],
    postInfo.title,
    postInfo.content
  );
  response.json().then(
    (data) => console.log(data)
  )
}

function selectBoard() {
  var OptionList = [];

  for (var i = 1; i < boardList.length; i++) {
    OptionList.push(
      <option key={i} value={i}>
        {boardList[i][BOARDINDEX.NAME]}
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
  const token = useSelector((state) =>state.token);
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
        <Link to="/board/all/">
          <button class="btn btn-primary float-end" type="button" onClick={ function() {
            PostBtnClicked(token)
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
