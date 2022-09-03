/************************************************
 * 회원가입 바 관련 컴포넌트 정의
 *
 *
 *************************************************/

import React, { useEffect, useState } from "react";
import RegisterComp from "../components/RegisterComp";
import { Provider, useSelector, useDispatch } from "react-redux";

function Register() {
  // 처음 1회만 실행
  useEffect(function () {}, []);

  return <RegisterComp></RegisterComp>;
}

export default Register;
