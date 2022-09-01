/************************************************
 * 메인 중앙 파트 컴포넌트 관련 정의
 *
 *
 *************************************************/

import React, { useState, useEffect } from "react";
import BoardComp from "../components/BoardComp";
import { getWriting, postWriting } from "../funcs/apis";
import { Provider, useSelector, useDispatch } from "react-redux";
import { getBoardList } from "../funcs/boardManage";
import { Link, Router, Routes, Route, useLocation} from 'react-router-dom';
import { boardList, BOARDLIST, BOARDINDEX } from "../funcs/boardManage";

// 이하 컴포넌트의 복잡한 과정을 처리
function Board() {

  var [boardData, boardDataFunc] = useState([]);
  var searchText = useSelector((state) => state.searchText);
  var boardIdx = useSelector((state) => state.currentIdx);

  const url = useLocation()
  // writing/:id 에서 id 얻어오기
  const urlList = url.pathname.split("/")
  const board = urlList[urlList.length - 2];
  console.log(board);

  useEffect(
    function () {
      loadWriting();
    },
    [boardIdx, searchText]
  );

  async function loadWriting() {
    let data = await getWriting("all/");

    let dataTag = [];

    for (var i = 0; i < data.length; i++) {
      let temp = data[i];

      // 검색 로직
      if (temp.title.includes(searchText) || temp.content.includes(searchText)) {

          if (temp.board === board || board === "all") {
            dataTag.push(
              <Link key={temp.id} to={"/writing/" + temp.id} style={{ textDecoration: 'none' }}>
                <strong>{temp.title} </strong>글 확인<br/><br/>
              </Link>
            )
          }
      }

    }
    boardDataFunc(dataTag);
  }

  return <Routes>
    <Route path={boardList[BOARDLIST.ALL][BOARDINDEX.URL]} element={<BoardComp data={boardData}></BoardComp>}></Route>
    <Route path={boardList[BOARDLIST.CAR][BOARDINDEX.URL]} element={<BoardComp data={boardData}></BoardComp>}></Route>
    <Route path={boardList[BOARDLIST.AIRPLANE][BOARDINDEX.URL]} element={<BoardComp data={boardData}></BoardComp>}></Route>
  </Routes>
}

export default Board;
