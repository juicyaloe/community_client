/************************************************
 * NavBar 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Router, Routes, Route } from "react-router-dom";

function NavBarComp(props) {
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
              <a className="nav-link" href="/login/">
                로그아웃
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComp;
