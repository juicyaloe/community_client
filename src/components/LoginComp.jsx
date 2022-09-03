/************************************************
 * Login 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { login } from "../funcs/apis";

function LoginComp(props) {
  const dispatch = useDispatch()
  var id, password;
  return (
    <div class="float-end p-5">
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
              type="password"
              class="form-control"
              placeholder="비밀번호"
            />
          </div>
          <Link to="/">
            <button
              class="btn btn-primary me-2"
              onClick={async function() {
                let response = await login(id, password);

                if (response.status == 200) {
                  response.json().then(function(data) {
                    console.log(data.token);
                    dispatch({type:"LOGIN", value:data.token});
                  })
                } else {
                  alert("로그인 에러");
                }

              }}>
              로그인
            </button>
          </Link>
          <Link to="/register">
            <button
              class="btn btn-primary">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
