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

// 이하 컴포넌트의 복잡한 과정을 처리
function Board() {
  var [writngList, writngListFunc] = useState([]);
  var boardIdx = useSelector((state) => state.currentIdx);

  useEffect(
    function () {
      loadWriting();
    },
    [boardIdx]
  );

  async function loadWriting() {
    let data = await getWriting(getBoardList()[boardIdx][1]);

    var listTag = [];
    for (var i = 0; i < data.length; i++) {
      var li = data[i];
      listTag.push(
        <div key={li.id}>
          <strong>{li.title}</strong>
          <br />
          {li.content}
          <br />
          <br />
        </div>
      );
    }
    writngListFunc(listTag);
  }

  return <BoardComp writinglist={writngList}></BoardComp>;
}

export default Board;
