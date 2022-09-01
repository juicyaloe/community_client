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
import {Link, Router, Routes, Route} from 'react-router-dom';
import { boardList } from "../funcs/boardManage";

const BOARDLIST = {
  ALL: 0,
  CAR: 1,
  AIRPLANE: 2
}

// 이하 컴포넌트의 복잡한 과정을 처리
function Board() {
  var [writngList, writngListFunc] = useState([]);
  var searchText = useSelector((state) => state.searchText);
  var boardIdx = useSelector((state) => state.currentIdx);

  useEffect(
    function () {
      loadWriting();
    },
    [boardIdx, searchText]
  );

  async function loadWriting() {
    let data = await getWriting(boardList[boardIdx][1]);
    var listTag = [];
    for (var i = 0; i < data.length; i++) {
      var li = data[i];
      if (li.title.includes(searchText) || li.content.includes(searchText))
        listTag.push(
          <Link key={li.id} to={"/writing/" + li.id} style={{ textDecoration: 'none' }}>
            <strong>{li.title}</strong><br/><br/>
          </Link>
        );
    }
    writngListFunc(listTag);

    // let value = <Routes>
    //               <Route path={BOARDLIST.ALL}></Route>
    //               <Route></Route>
    //               <Route></Route>
    //             </Routes>

  }

  return <BoardComp writinglist={writngList}></BoardComp>;
}

export default Board;
