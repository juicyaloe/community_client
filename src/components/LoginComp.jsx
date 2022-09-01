/************************************************
 * Login 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { TOKEN } from "../funcs/TOKEN";
import { login } from "../funcs/apis";

async function CheckLogin(id, pw) {
  let response = await login("test1", "12341231a");
  var _token = ""
  if (response.status === 200) {
    response.json().then((result) => {
      _token = result.token;
      console.log(_token);
    });
  } 
  else {
    alert("로그인 실패");
    return "";
  }
  return _token;
}
function LoginComp(props) {
  const dispatch = useDispatch()
  var id, password;
  return (
    <div>
      <div class="input-group mb-4">
        <div>
          <div class="mb-2">
            <input
              onChange={(e) => (id = e.target.value)}
              class="form-control"
              placeholder="아이디"
            />
          </div>
          <div class="mb-2">
            <input
              onChange={(e) => (password = e.target.value)}
              class="form-control"
              placeholder="비밀번호"
            />
          </div>
          <button
            class="btn btn-primary float-end"
            onClick={async() => {
              var token = await CheckLogin(id, password);
              // if(token!==""){
              //   dispatch({type:"LOGIN", value:token});
              // }
              // console.log(token)
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
