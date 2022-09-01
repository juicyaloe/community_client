/************************************************
 * 하단 바 관련 컴포넌트 정의
 *
 *
 *************************************************/

import React, { useEffect, useState } from "react";
import LoginComp from "../components/LoginComp";
import { Provider, useSelector, useDispatch } from "react-redux";

function Footer() {
  // 처음 1회만 실행
  useEffect(function () {}, []);

  return <LoginComp></LoginComp>;
}

export default Footer;
