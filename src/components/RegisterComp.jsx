/************************************************
 * Register 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { register } from "../funcs/apis";

function isRegisterable(id, pw, pw2, email){
  if(id!=="" && pw!=="" && pw2!=="" && email!=="")
  if(pw===pw2){
    return true;
  }
  else
    return false;
}
function RegisterComp(props) {
  const dispatch = useDispatch()
  var id, password, password2, email;
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
              class="form-control"
              placeholder="비밀번호"
            />
          </div>
          <div class="mb-2">
            <input
              onChange={(e) => (password2 = e.target.value)}
              class="form-control"
              placeholder="비밀번호 확인"
            />
          </div>
          <div class="mb-2">
            <input
              onChange={(e) => (email = e.target.value)}
              class="form-control"
              placeholder="이메일"
            />
          </div>
          <Link to="/login">
            <button
              class="btn btn-primary">
              뒤로가기
            </button>
          </Link>
          <button
            class="btn btn-primary float-end" 
            onClick={async function(){
              let response = await register(id, password, email);
              console.log(response);
              if (response.status == 201) {
                alert("회원가입 성공");
              } else {
                alert("회원가입 실패");
              }
              
            }}>
            회원가입 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterComp;
