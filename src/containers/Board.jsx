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
import { boardList, BOARDLIST, BOARDINDEX, BOARDNAME } from "../funcs/boardManage";
import moment from "moment";

// 이하 컴포넌트의 복잡한 과정을 처리
function Board() {

  var [boardData, boardDataFunc] = useState([]);
  var searchText = useSelector((state) => state.searchText);
  var boardIdx = useSelector((state) => state.currentIdx);

  const url = useLocation()

  // 게시판 이름 얻어오기
  const urlList = url.pathname.split("/")
  const board = urlList[urlList.length - 2];

  useEffect(
    function () {
      loadWriting();
    },
    [boardIdx, searchText]
  );

  async function loadWriting() {
    let response = await getWriting("all/");
    
    if (response.status === 200) {
      response.json().then(
        function(_data) {
          var data = _data.slice()
          data.sort(
            function(a, b) {
                if (a.inittime < b.inittime) {
                  return 1;
                } else {
                  return -1;
                }
            }
          )
          let dataTag = [];

          for (var i = 0; i < data.length; i++) {
            let temp = data[i];

            var moment = require('moment');
            const date = moment(temp.inittime).format("YYYY년 MM월 DD일 HH시 mm분 ss초 작성");

            // 검색 로직
            if (temp.title.includes(searchText) || temp.content.includes(searchText)) {

            if (temp.board === board || board === "all") {
            dataTag.push(
              <Link key={temp.id} to={"/writing/" + temp.id + "/"} style={{ textDecoration: 'none' }}>
                <h4 style={{float: "left", color: "black"}} onClick={(e) => e.preventDefault()}>
                  글: {temp.title}</h4>
                <div onClick={(e) => e.preventDefault()} style={{float: "left"}}>&nbsp;/ {BOARDNAME[temp.board]} 게시판 / &nbsp;{date}</div>
                <button class="btn btn-primary">글 보기</button>
                <br/><br/><br/>
              </Link>
                  )
                }
              }
            }
          boardDataFunc(dataTag);
        }
      )
    } else {
      console.log("글 불러오기 실패");
    }

    
  }

  return <Routes>
    <Route path={boardList[BOARDLIST.ALL][BOARDINDEX.URL]} element={<BoardComp data={boardData}></BoardComp>}></Route>
    <Route path={boardList[BOARDLIST.CAR][BOARDINDEX.URL]} element={<BoardComp data={boardData}></BoardComp>}></Route>
    <Route path={boardList[BOARDLIST.AIRPLANE][BOARDINDEX.URL]} element={<BoardComp data={boardData}></BoardComp>}></Route>
  </Routes>
}

export default Board;
