/************************************************
 * 사이드 바 관련 컴포넌트 정의
 *
 *
 *************************************************/

import React, { useState, useEffect } from "react";
import SideBarComp from "../components/SideBarComp";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Link, Router, Routes, Route, useLocation } from "react-router-dom";
import { boardList, BOARDINDEX } from "../funcs/boardManage";

// 이하 컴포넌트의 복잡한 과정을 처리
function SideBar() {
  const dispatch = useDispatch();
  // 처음 1회만 실행

  useEffect(function () {}, []);

  var result = [];
  for (var i = 0; i < boardList.length; i++) {
    result.push(
      <Link key={i}
        to={"/board/" + boardList[i][BOARDINDEX.URL]}
        style={{ textDecoration: "none" }}
      >
        <li
          data-id={i}
          key={i}
          class="list-group-item shadow-sm p-2 mb-1 bg-body rounded"
          onClick={(e) => {
            dispatch({ type: "CHANGEINDEX", value: e.target.dataset.id });
            dispatch({ type: "SEARCH", value: "" });
          }}
        >
          {boardList[i][BOARDINDEX.NAME]}
        </li>
      </Link>
    );
  }

  return <SideBarComp writinglist={result}></SideBarComp>;
}

export default SideBar;
