/************************************************
 * 사이드 바 관련 컴포넌트 정의
 *
 *
 *************************************************/

import React, { useState, useEffect } from "react";
import SideBarComp from "../components/SideBarComp";
import { Provider, useSelector, useDispatch } from "react-redux";
import { getBoardList } from "../funcs/boardManage";

// 이하 컴포넌트의 복잡한 과정을 처리
function SideBar() {
  // 처음 1회만 실행

  useEffect(function () {}, []);

  var boardList = getBoardList();
  var result = [];
  for (var i = 0; i < boardList.length; i++) {
    result.push(
      <li
        key={i}
        class="list-group-item"
        onClick={(e) => alert(e.target.innerText + " Clicked")}
      >
        {boardList[i]}
      </li>
    );
  }

  return <SideBarComp writinglist={result}></SideBarComp>;
}

export default SideBar;
