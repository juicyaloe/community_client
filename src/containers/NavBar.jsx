/************************************************
 * 상단 바 관련 컴포넌트 정의
 *
 *
 *************************************************/

import React, { useState, useEffect } from "react";
import NavBarComp from "../components/NavBarComp";
import { Provider, useSelector, useDispatch } from "react-redux";

// 이하 컴포넌트의 복잡한 과정을 처리
function NavBar() {
  // 처음 1회만 실행

  useEffect(function () {}, []);

  return <NavBarComp></NavBarComp>;
}

export default NavBar;
