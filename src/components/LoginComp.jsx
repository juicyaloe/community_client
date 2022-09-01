/************************************************
 * Login 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Router, Routes, Route } from "react-router-dom";

function LoginComp(props) {
  return (
    <div>
      <div class="input-group mb-4">
        <div>
          <div class="mb-2">
            <input class="form-control" placeholder="아이디" />
          </div>
          <div class="mb-2">
            <input class="form-control" placeholder="비밀번호" />
          </div>
          <button class="btn btn-primary float-end">로그인</button>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
