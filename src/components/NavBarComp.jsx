/************************************************
 * NavBar 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";

function NavBarComp(props) {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          커뮤니티
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post/">
                글쓰기
              </Link>
            </li>
            <li className="nav-item float-end">
              <Link className="nav-link" to="/login/" onClick={
                function() {
                  dispatch({type: "LOGOUT"});
                }
              }>
                로그아웃
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComp;
